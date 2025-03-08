import React, { useEffect, useState } from "react";
import { useModal } from "../../contexts/modalContext";
import { createFeedbackUserWithEmail, signInFeedbackUserWithEmail } from "../../firebase/auth";
import CreateAccountForm from "./CreateAccountForm";
import ModalWrapper from "../common/ModalWrapper";

interface ICreateAccountModal {}

const CreateAccountModal: React.FC<ICreateAccountModal> = ({}) => {
  const { currentModal, setCurrentModal } = useModal();
  const [error, setError] = useState<string>("");
  const [formValues, setFormValues] = useState<any>({}); 
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setError("")
  },[formValues, isLogin])

  return (
    <ModalWrapper
      title="Feedback Authentication"
      isOpen={currentModal === "createAccount"}
      okText={isLogin ? 'Sign in':"Sign up"}
      cancelText="cancel"
      okProps={{
        disabled: !formValues.isValid,
      }}
      onClose={() => setCurrentModal(null)}
      onOkay={() => {
        const { email, password, isValid } = formValues;
        if(!isValid) return false;
        if(isLogin){
            signInFeedbackUserWithEmail(email,password).then(() => setCurrentModal('submitFeedback')).catch(err => setError(err?.message));
        }else{
            createFeedbackUserWithEmail(email,password).then(() => setCurrentModal('submitFeedback')).catch(err => setError(err?.message));
        }
      }}
    >
      <CreateAccountForm onChange={setFormValues} />
      <div className="flex gap-x-2 items-center my-4">
        <input type="checkbox" onChange={(e)=> setIsLogin(e.target.checked)} />
        <label>Is Logging in ?</label>
      </div>
      {error && <div className="text-red-600">{error}</div>}
      <button className="text-blue-400 my-4" onClick={() => setCurrentModal('submitFeedback')}>Skip this step</button>
    </ModalWrapper>
  );
};

export default CreateAccountModal;

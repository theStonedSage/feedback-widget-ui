import React, { useEffect, useState } from "react";
import { useModal } from "../../contexts/modalContext";
import ModalWrapper from "../common/ModalWrapper";
import SubmitFeedbackForm from "./components/SubmitFeedbackForm";
import { useSubmitFeedback } from "./hooks/useSubmitFeedback";
import { useValidateFormData } from "./hooks/useValidateFormData";

interface ISubmitFeedbackModal {}

const SubmitFeedbackModal: React.FC<ISubmitFeedbackModal> = ({}) => {
  const { currentModal, setCurrentModal } = useModal();
  const [error, setError] = useState<string>("");
  const [formInputs, setFormInputs] = useState<any>({});
  const validateFormData = useValidateFormData();
  const submitFeedback = useSubmitFeedback();

  useEffect(() => {
    setError("");
  }, [formInputs]);

  return (
    <ModalWrapper
      title="Submit Feedback"
      isOpen={currentModal === "submitFeedback"}
      okText={"Submit"}
      cancelText="Cancel"
      okProps={{}}
      onClose={() => setCurrentModal(null)}
      onOkay={() => {
        const isValid = validateFormData(formInputs);
        console.log("isValid", isValid);

        if (!isValid) {
          setError("Please fill all required fields");
          return;
        }

        submitFeedback(formInputs).then(resp => {
            if(resp.success){
                setCurrentModal("thankyou");
            }else{
                setError("Some error occured in api");
            }
        }).catch(err => setError(err?.message))
        
      }}
    >
      <SubmitFeedbackForm onChange={setFormInputs} />
      {error && <div className="text-red-600 mt-4">{error}</div>}
    </ModalWrapper>
  );
};

export default SubmitFeedbackModal;

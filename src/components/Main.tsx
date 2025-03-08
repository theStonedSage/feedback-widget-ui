import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { useModal } from "../contexts/modalContext";
import {
  createFeedbackUserWithEmail,
  signInFeedbackUserWithEmail,
  signOutFeedbackUser,
} from "../firebase/auth";
import Button from "./common/Button";
import CreateAccountModal from "./CreateAccountModal/CreateAccountModal";
import Modal from "./common/ModalWrapper";
import SubmitFeedbackModal from "./SubmitFeedbackModal/SubmitFeedbackModal";
import ThankYouModal from "./ThankYouModal";

interface IMain {}

const Main: React.FC<IMain> = ({}) => {
  const { currentUser, isUserLoggedIn } = useAuth();
  const { setCurrentModal } = useModal();

  console.log("currentUser", currentUser, isUserLoggedIn);
  return (
    <div className="feedback-widget-wrapper">
      {/* <Button onClick={signUp} >Sign up</Button> */}
      <Button onClick={() => {
          if(!isUserLoggedIn){
            setCurrentModal('createAccount');
          }else{
            setCurrentModal('submitFeedback');
          }
      }} >Submit Feedback</Button>
      <CreateAccountModal />
      <SubmitFeedbackModal />
      <ThankYouModal />
    </div>
  );
};

export default Main;

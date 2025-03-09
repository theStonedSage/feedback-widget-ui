import React, { useEffect } from "react";
import { useModal } from "../contexts/modalContext";
import { useShowWidget } from "../contexts/showWidgetContext";
import ModalWrapper from "./common/ModalWrapper";

interface IThankYouModal {}

const ThankYouModal: React.FC<IThankYouModal> = ({}) => {
  const { currentModal, setCurrentModal } = useModal();
  const { setShowWidget } = useShowWidget();
  const closeModal = () => {
    setCurrentModal(null);
    setShowWidget(false);
  };

  useEffect(() => {
    if (currentModal !== "thankyou") {
      return;
    }
    const timer = setTimeout(closeModal, 3000);
    return () => clearTimeout(timer);
  }, [currentModal]);

  return (
    <ModalWrapper
      title="Done"
      isOpen={currentModal === "thankyou"}
      okText={"Submit"}
      cancelText="Cancel"
      okProps={{}}
      onClose={closeModal}
      onOkay={() => {}}
      noFooter={true}
    >
      <div className="flex flex-col items-center justify-center text-center gap-y-4 mb-8">
        <img
          alt="green-check"
          className="h-[60px]"
          src="https://cdn.peoplegrove.com/admin/1653650796810green-check.svg"
        />
        <div className="text-3xl">Thank you !!</div>
      </div>
    </ModalWrapper>
  );
};

export default ThankYouModal;

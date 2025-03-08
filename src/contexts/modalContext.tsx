import { createContext, useContext, useState } from "react";

type ModalType = "createAccount" | "submitFeedback" | "thankyou" | null;

const ModalContext = createContext<{
  currentModal: ModalType;
  setCurrentModal: (e: ModalType) => void;
}>({
  currentModal: null,
  setCurrentModal: (e: ModalType) => {},
});

export const ModalContextProvider = ({ children }: any) => {
  const [currentModal, setCurrentModal] = useState<ModalType>(null);

  return (
    <ModalContext.Provider value={{ currentModal, setCurrentModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

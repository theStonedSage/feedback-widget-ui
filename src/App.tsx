import React from "react";
import "./App.css";
import Main from "./components/Main";
import { AuthProvider } from "./contexts/authContext";
import { ModalContextProvider } from "./contexts/modalContext";
import { QuestionsProvider } from "./contexts/questionsContext";
import { ShowWidgetContextProvider } from "./contexts/showWidgetContext";

function App() {
  return (
    <AuthProvider>
      <ModalContextProvider>
        <QuestionsProvider>
          <ShowWidgetContextProvider>
            <Main />
          </ShowWidgetContextProvider>
        </QuestionsProvider>
      </ModalContextProvider>
    </AuthProvider>
  );
}

export default App;

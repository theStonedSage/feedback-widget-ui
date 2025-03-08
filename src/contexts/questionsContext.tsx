import { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

const QuestionsContext = createContext<{
  questions: FeedbackQuestion[];
}>({
  questions: [],
});

const fetchQuestions = async () => {
  const url = `${API_URL}/api/questions`;
  try {
      console.log("starting fetch call");
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    return (json?.questions || []);
  } catch (error: any) {
    console.error(error.message);
    return [];
  }
};

export const QuestionsProvider = ({ children }: any) => {
  const [questions, setQuestions] = useState<FeedbackQuestion[]>([]);

  useEffect(() => {
    fetchQuestions().then(setQuestions).catch((e)=> console.log("Some error occured, no questions found"));
  }, []);

  return (
    <QuestionsContext.Provider value={{ questions }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestions = () => useContext(QuestionsContext);

import React, { useEffect, useState } from "react";
import { useQuestions } from "../../../contexts/questionsContext";
import DynamicInputGenerator from "../../common/DynamicInputGenerator";

interface ISubmitFeedbackForm {
  onChange: (e: any) => void;
}

const SubmitFeedbackForm: React.FC<ISubmitFeedbackForm> = ({ onChange }) => {
  const { questions } = useQuestions();
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    onChange(inputs);
  }, [inputs]);

  useEffect(() => {
    setInputs(
      questions.reduce((prev, curr) => {
        let value: any = "";
        switch (curr.type) {
          case "boolean":
            value = false;
            break;
          case "number":
            value = 0;
            break;
          default:
            value = "";
            break;
        }
        return {
          ...prev,
          [curr.docId]: {
            value,
            error: "",
          },
        };
      }, {})
    );
  }, [questions]);

  const setInputValByKey = (key: string, value: Input<any>) => {
    setInputs((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-y-4">
      {Object.keys(inputs).length > 0 && questions.map((question) => (
        <DynamicInputGenerator
          question={question}
          input={(inputs as any)[question.docId]}
          setInput={setInputValByKey}
        />
      ))}
    </div>
  );
};

export default SubmitFeedbackForm;

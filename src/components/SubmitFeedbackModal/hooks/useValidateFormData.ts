import { useQuestions } from "../../../contexts/questionsContext";

export const useValidateFormData = () => {
  const { questions } = useQuestions();

  return (formData: any) => {
    let isValid = true;
    Object.keys(formData).forEach((docId) => {
      const question = questions.find((e) => e.docId === docId);
      const value = formData[docId]?.value || "";
      if (
        question &&
        question.required &&
        question.type !== "boolean" &&
        value?.length === 0
      ) {
        isValid = false;
      }
    });
    return isValid;
  };
};

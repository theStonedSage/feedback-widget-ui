import { useAuth } from "../../../contexts/authContext";
import { useQuestions } from "../../../contexts/questionsContext";
import { API_URL } from "../../../utils/constants";

const url = `${API_URL}/api/feedback`;

export const useSubmitFeedback = () => {
  const { questions } = useQuestions();
  const { currentUser } = useAuth();
  return async (formData: any) => {
    const responsePayloadArray = Object.keys(formData).map((docId) => {
      const question = questions.find((q) => q.docId === docId);
      const value = formData[docId].value;
      if (!question) return null;
      return {
        question: {
          docId: question.docId,
          label: question.label,
        },
        submission: value,
      };
    });
    const sanitaisedPayload = {
      ...(currentUser &&
        currentUser.providerData.length > 0 && {
          user: currentUser.providerData[0],
        }),
      feedback: responsePayloadArray.filter((e) => !!e),
    };
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ data: sanitaisedPayload }),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return {
          success: true
      };
    } catch (error: any) {
      return {
        success: false,
      };
    }
  };
};

interface FeedbackQuestion {
    docId: string;
    label: string;
    description?: string;
    type: QuestionTypes;
    required: boolean
    options?: FeedbackQuestionOption[]
}

interface FeedbackQuestionOption {
    label: string;
    value: string;
}

interface Input<D> {
    value: D;
    error: string;
}

type QuestionTypes = 'mcq' | 'text' | 'number' | 'boolean';
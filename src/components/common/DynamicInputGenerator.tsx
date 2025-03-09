import React from "react";
import { z } from "zod";
import TextInput from "./TextInput";

interface IDynamicInputGenerator {
  question: FeedbackQuestion;
  input: Input<any>;
  setInput: (id: string, e: Input<any>) => void;
}

const InputByType = ({ question, input, setInput }: IDynamicInputGenerator) => {
  const {
    type,
    required: isRequired,
    docId,
    options = [
      {
        label: "None",
        value: "none",
      },
    ],
  } = question;
  switch (type) {
    case "text":
      return (
        <TextInput
          value={input.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value;
            if (!val && isRequired) {
            }
            setInput(docId, {
              value: val,
              error: !val && isRequired ? "this is a required field" : "",
            });
          }}
        />
      );
    case "boolean":
      return (
        <input
          type="checkbox"
          value={input.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const val = e.target.checked;
            setInput(docId, {
              value: val,
              error: "",
            });
          }}
        />
      );
    case "mcq":
      return (
        <select
          value={input.value}
          onChange={(e) => {
            const val = e.target.value;
            setInput(docId, {
              value: val,
              error: !val && isRequired ? "this is a required field" : "",
            });
          }}
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="" selected>
            Choose an option
          </option>
          {options.map((opt) => (
            <option value={opt.value}>{opt.label}</option>
          ))}
        </select>
      );
    case "number":
      return (
        <TextInput
          type="number"
          value={input.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value;
            setInput(docId, {
              value: val,
              error: !val && isRequired ? "this is a required field" : "",
            });
          }}
        />
      );
    default:
      return (
        <TextInput
          value={input.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value;
            setInput(docId, {
              value: val,
              error: !val && isRequired ? "this is a required field" : "",
            });
          }}
        />
      );
  }
};

const DynamicInputGenerator: React.FC<IDynamicInputGenerator> = ({
  question,
  input,
  setInput,
}) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {question.label}
        {question.required && <span className="ml-1 text-red-600">*</span>}
      </label>
      <InputByType question={question} input={input} setInput={setInput} />
      {input?.error && <div className="text-red-500 mt-1">{input.error}</div>}
    </div>
  );
};

export default DynamicInputGenerator;

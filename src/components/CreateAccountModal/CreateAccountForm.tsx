import React, { useEffect, useState } from "react";
import TextInput from "../common/TextInput";
import { z } from "zod";

interface ICreateAccountForm {
  onChange: (e: { email: string; password: string; isValid: boolean }) => void;
}

const EmailValidator = z
  .string()
  .min(1, { message: "This field has to be filled." })
  .email("This is not a valid email.");
const PasswordValidator = z.string().min(6);

const CreateAccountForm: React.FC<ICreateAccountForm> = ({ onChange }) => {
  const [email, setEmail] = useState<Input<string>>({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState<Input<string>>({
    value: "",
    error: "",
  });

  useEffect(() => {
    onChange({
      email: email.value,
      password: password.value,
      isValid:
        !email.error &&
        email.value.length > 0 &&
        password.value.length > 0 &&
        !password.error,
    });
  }, [email, password]);
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Email
        </label>
        <TextInput
          value={email.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value;
            const resp = EmailValidator.safeParse(val);
            setEmail({
              value: val,
              error: !resp.success ? "Please enter a valid email" : "",
            });
          }}
        />
        {email.error && <div className="text-red-500 mt-1">{email.error}</div>}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Password
        </label>
        <TextInput
          value={password.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value;
            const resp = PasswordValidator.safeParse(val);
            setPassword({
              value: val,
              error: !resp.success ? "Please enter at least 6 charachters" : "",
            });
          }}
        />
        {password.error && <div className="text-red-500 mt-1">{password.error}</div>}
      </div>
    </div>
  );
};

export default CreateAccountForm;

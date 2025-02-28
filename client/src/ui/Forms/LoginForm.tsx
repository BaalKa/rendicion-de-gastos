"use client";
import React, { useId, useRef } from "react";
import InputField from "@/ui/InputField";
import SubmitButton from "@/ui/SubmitButton";

const LoginForm = ({ formAction }: { formAction: FormActionFunction }) => {
  const emailInputID = useId();
  const passwordInputID = useId();

  return (
    <form action={formAction} className="flex flex-col">
      <h1 className="mb-10 justify-center self-center text-4xl font-semibold text-rose-500">
        Good to see you again
      </h1>

      <p className="mb-10 self-center">
        Please fill out the fields with your log-in credentials.
      </p>

      <div className="mb-4 flex flex-col">
        <InputField
          inputID={emailInputID}
          inputType="email"
          inputName="email"
          labelText="Email"
          placeholder="Your work email"
          required
        />
      </div>

      <div className="mb-4 flex flex-col">
        <InputField
          inputID={passwordInputID}
          inputType="password"
          inputName="password"
          labelText="Password"
          placeholder="Your password"
          required
        />
      </div>

      <div className="mt-4 flex flex-col">
        <SubmitButton innerText="Log-In" />
      </div>
    </form>
  );
};

export default LoginForm;

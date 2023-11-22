import clsx from "clsx";
import React, { InputHTMLAttributes, forwardRef } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  htmlFor?: string;
  register: UseFormRegister<any>;
  error?: FieldErrors<any>;
}

export default function Input({
  label,
  htmlFor,
  className,
  register,
  required,
  error,
  name,
  ...rest
}: InputProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor={htmlFor}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <input
        className={clsx(
          "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5",
          className
        )}
        {...rest}
        {...register(name || "", { required: "This field is required." })}
      />
      <div className="text-xs mt-1 text-red-500">
        <ErrorMessage errors={error} name={name || ""} />
      </div>
    </div>
  );
}

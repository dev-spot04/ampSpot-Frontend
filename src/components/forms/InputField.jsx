import { Field, ErrorMessage, useField } from "formik";
import React from "react";

const InputField = ({
  type,
  placeholder,
  required,
  className,
  uni,
  labelClass,
  label,
  lengthWarning,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={uni}
          className={"text-xs 2xl:text-[16px] my-3 mt-5" + " " + labelClass}
        >
          {label}
        </label>
      )}
      <Field
        type={type}
        id={uni}
        name={uni}
        placeholder={placeholder}
        required={required}
        className={
          (type === "text" || "password"
            ? `${
                props.errors[uni] && props.touched[uni]
                  ? "border border-red-500"
                  : "border border-border/50"
              } bg-background outline-none placeholder:text-inputText focus:border-border rounded-md 2xl:h-[51px] p-2 px-4 text-[14px] text-white`
            : "") +
          " " +
          className
        }
      />
      {type === "password" && lengthWarning && (
        <p
          className={`${
            props.touched.password && props.errors.password
              ? "text-red-500"
              : ""
          } text-xs 2xl:text-[14px] my-1 2xl:my-2`}
        >
          Password must be at least 6 characters
        </p>
      )}
    </div>
  );
};

export default InputField;

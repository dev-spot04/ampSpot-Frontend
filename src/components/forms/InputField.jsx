import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Field, ErrorMessage, useField } from "formik";
import React, { useState } from "react";

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
  const [field, meta] = useField();
  const [passVisibility, setPassVisibility] = useState(false);
  const hidePass = () => {
    setPassVisibility(false);
  };

  const showPass = () => {
    setPassVisibility(true);
  };
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
      <div className="flex items-center justify-center my-1">
        <Field
          type={
            type !== "password" || type === undefined
              ? type
              : type === "password" && passVisibility
              ? "text"
              : "password"
          }
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
                } bg-background outline-none placeholder:text-inputText focus:border-border rounded-md 2xl:h-[51px] p-2 px-4 text-[14px] text-white w-full`
              : "") +
            " " +
            className
          }
        />
        {type === "password" && passVisibility && (
          <IconButton onClick={() => hidePass()}>
            <VisibilityOff
              fontSize="medium"
              className="text-lightBlue cursor-pointer"
            />
          </IconButton>
        )}
        {type === "password" && !passVisibility && (
          <IconButton onClick={() => showPass()}>
            <Visibility
              fontSize="medium"
              className="text-lightBlue cursor-pointer"
            />
          </IconButton>
        )}
      </div>
      {type === "password" && lengthWarning && (
        <p className={`text-xs 2xl:text-[14px]`}>
          <ErrorMessage name="password" />
        </p>
      )}
    </div>
  );
};

export default InputField;

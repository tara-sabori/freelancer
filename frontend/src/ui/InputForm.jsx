import React from "react";

const InputForm = ({
  label,
  name,
  // register,
  // validationSchema = {},
  type = "text",
  required,
  onChange,
  value,
  // errors,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-secondary-800 text-sm" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        // {...register(name, validationSchema)}
        onChange={onChange}
        id={name}
        className="border border-secondary-400 p-1.5 w-full text-sm rounded-md outline-none focus:shadow-sm bg-secondary-50"
        type={type}
        autoComplete="off"
        value={value}
      />
      {/* {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )} */}
    </div>
  );
};

export default InputForm;

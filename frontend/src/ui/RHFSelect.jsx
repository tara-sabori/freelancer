function RHFSelect({
  label,
  name,
  register,
  errors,
  options,
  required,
  validationSchema,
  isLoading = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm text-right text-secondary-700"
      >
        {label} {required && <span className="text-error text-base">*</span>}
      </label>
      {isLoading ? (
        <div className="w-full rounded-md h-9 bg-secondary-300 animate-pulse"></div>
      ) : (
        <select
          {...register(name, validationSchema)}
          id={name}
          className="border border-secondary-400 p-1.5 w-full text-sm rounded-md outline-none focus:shadow-sm bg-secondary-50"
        >
          {options?.length > 0 &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      )}
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
export default RHFSelect;

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerField({
  name,
  label,
  value,
  onChange,
  required = false,
  errors,
}) {
  return (
    <div>
      <span className="mb-2 block text-sm text-secondary-700">
        {label} {required && <span className="text-error text-base">*</span>}
      </span>
      <DatePicker
        containerClassName="w-full"
        inputClass="border border-secondary-400 p-1.5 w-full text-sm rounded-md outline-none focus:shadow-sm bg-secondary-50"
        calendarPosition="bottom-center"
        value={value}
        onChange={(date) => onChange(date)}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
export default DatePickerField;

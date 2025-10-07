import { useSearchParams } from "react-router";

const FilterDropDown = ({ filterField, options, isLoading = false }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "ALL";
  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };
  return (
    <div>
      {isLoading ? (
        <div className="w-[135px] rounded-md h-9 bg-secondary-300 animate-pulse"></div>
      ) : (
        <select
          value={value}
          onChange={handleChange}
          className="border border-secondary-400 p-1.5 w-[135px] text-xs rounded-md outline-none focus:shadow-sm bg-secondary-50 cursor-pointer"
        >
          {options?.length > 0 &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      )}
    </div>
  );
};

export default FilterDropDown;

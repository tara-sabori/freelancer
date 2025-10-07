import { useSearchParams } from "react-router";

const FilterButton = ({ filterField, title, data }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "ALL";
  const handleClick = (item) => {
    searchParams.set(filterField, item);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-xs">{title}</span>
      <div className="flex items-center w-fit overflow-hidden bg-secondary-50 rounded-md border border-secondary-400">
        {data?.map((d) => (
          <button
            className={`text-xs py-2 px-3 cursor-pointer ${value === d?.value ? "bg-primary-900 text-white font-semibold" : "bg-secondary-50 text-secondary-700"}`}
            key={d?.value}
            onClick={() => handleClick(d?.value)}
          >
            {d?.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButton;

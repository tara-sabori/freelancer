import useCategories from "../../../hooks/useCategories";
import FilterButton from "../../../ui/FilterButton";
import FilterDropDown from "../../../ui/FilterDropDown";

const FilterComponent = () => {
  const sortList = [
    { label: "مرتب‌سازی(همه)", value: "ALL" },
    { label: "مرتب‌سازی(جدیدترین)", value: "latest" },
    { label: "مرتب‌سازی(قدیمی‌ترین)", value: "earliest" },
  ];
  const statusList = [
    { label: "همه", value: "ALL" },
    { label: "باز", value: "OPEN" },
    { label: "بسته", value: "CLOSED" },
  ];

  const { categories, isLoadingCategory } = useCategories();
  const categoryOptions =
    categories?.map((cat) => ({
      label: cat?.title,
      value: cat?.englishTitle,
    })) || [];

  return (
    <div className="flex flex-col gap-3 md:flex-row md:w-[95%] md:items-center md:justify-between md:gap-0">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-secondary-700">لیست کل پروژه‌ها</h3>
        <div className="md:hidden">
          <FilterButton
            filterField={"status"}
            title={"وضعیت :"}
            data={statusList}
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-3">
        <div className="hidden md:inline-block">
          <FilterButton
            filterField={"status"}
            title={"وضعیت :"}
            data={statusList}
          />
        </div>
        <FilterDropDown filterField={"sort"} options={sortList} />
        <FilterDropDown
          filterField={"category"}
          options={[
            { label: "دسته‌بندی(همه)", value: "ALL" },
            ...categoryOptions,
          ]}
          isLoading={isLoadingCategory}
        />
      </div>
    </div>
  );
};

export default FilterComponent;

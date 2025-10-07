import { useState } from "react";
import { useSearchParams } from "react-router";
import { PiCircleNotchLight, PiPlusBold } from "react-icons/pi";
import useCategories from "../../../../hooks/useCategories";
import CategoryListItem from "./CategoryListItem";
import Modal from "../../../../ui/Modal";
import CreateCategoryForm from "../create/CreateCategoryForm";
import Paginate from "../../../../ui/Paginate";

const CategoriesList = () => {
  const [serachParams] = useSearchParams();
  const page = serachParams.get("page");
  const currentPage = page || 1;

  const [showCreateForm, setShowCreateForm] = useState(false);
  const { categories, isLoadingCategory, isFetching } = useCategories();
  console.log(categories);

  const lastIndex = currentPage * 10;
  const firstIndex = lastIndex - 10;
  const records = categories?.slice(firstIndex, lastIndex);
  const pageCount = Math.ceil(categories?.length / 10);

  return (
    <div className="space-y-6">
      {showCreateForm && (
        <Modal
          title={"ایجاد دسته‌بندی"}
          onClose={() => setShowCreateForm(false)}
        >
          <CreateCategoryForm onClose={() => setShowCreateForm(false)} />
        </Modal>
      )}
      <div className="flex justify-between items-center px-0 w-full md:w-[90%]">
        <h3 className="font-semibold text-secondary-700">لیست دسته‌بندی‌ها</h3>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-primary-900 text-white text-sm flex items-center gap-1 p-2 rounded-md cursor-pointer"
        >
          <PiPlusBold />
          <span>ایجاد دسته‌بندی</span>
        </button>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] w-[90%] overflow-x-auto">
          <thead>
            <tr>
              <th className="bg-secondary-100 text-sm font-normal py-1.5 rounded-tr-2xl">
                #
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                نام
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                نام انگلیسی
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                توضیحات
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5 rounded-tl-2xl">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoadingCategory || isFetching ? (
              <tr>
                <td colSpan={5}>
                  <div className="bg-secondary-50 flex items-center justify-center gap-2 h-[200px]">
                    <span className="text-xs">در حال بارگذاری</span>
                    <div className="animate-spin">
                      <PiCircleNotchLight />
                    </div>
                  </div>
                </td>
              </tr>
            ) : !records?.length ? (
              <tr>
                <td colSpan={5}>
                  <div className="bg-secondary-50 flex items-center justify-center gap-4 h-[200px]">
                    <span className="text-xs">موردی یافت نشد</span>
                    <div className="w-[150px] h-[150px]">
                      <img
                        src="/assets/images/not-found.svg"
                        alt="not found"
                        className="w-[150px]"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ) : (
              records?.map((category) => (
                <CategoryListItem
                  key={category?._id}
                  category={category}
                  row={categories.indexOf(category)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isLoadingCategory && !isFetching && records?.length > 0 && (
        <Paginate pageCount={pageCount} />
      )}
    </div>
  );
};

export default CategoriesList;

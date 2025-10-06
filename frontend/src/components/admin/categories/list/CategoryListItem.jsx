import { PiPencilLineLight, PiTrashDuotone } from "react-icons/pi";
import Modal from "../../../../ui/Modal";
import { toPersianNumbers } from "../../../../utils/toPersianNumbers";
import truncateText from "../../../../utils/truncateText";
import { useState } from "react";
import CreateCategoryForm from "../create/CreateCategoryForm";
import ConfirmDelete from "../../../../ui/ConfirmDelete";
import useRemoveCategory from "../../../../hooks/useRemoveCategory";

const CategoryListItem = ({ category, row }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const { removeCategoryFn, isDeleting } = useRemoveCategory();
  const handleRemove = () => {
    const responseData = removeCategoryFn(category?._id, {
      onSuccess: () => setOpenDelete(false),
    });
  };
  return (
    <tr className="even:bg-primary-50/50">
      <td className="text-xs p-1.5 px-1 text-center">
        {toPersianNumbers(row + 1)}
      </td>
      <td className="text-xs p-1.5 px-1 text-center whitespace-nowrap">
        {category?.title}
      </td>
      <td className="text-xs p-1.5 px-1 text-center whitespace-nowrap">
        {category?.englishTitle}
      </td>
      <td
        className="text-xs p-1.5 px-1 text-center"
        title={category?.description}
      >
        {truncateText(category?.description, 50)}
      </td>
      <td className="text-xs p-1.5 px-1">
        <div className="flex items-center justify-center gap-x-4">
          <>
            <button onClick={() => setOpenEdit(true)}>
              <PiPencilLineLight className="text-lg text-primary-900 cursor-pointer" />
            </button>
            {openEdit && (
              <Modal
                title={`ویرایش دسته‌بندی ${category?.title}`}
                onClose={() => setOpenEdit(false)}
              >
                <CreateCategoryForm
                  data={category}
                  onClose={() => setOpenEdit(false)}
                />
              </Modal>
            )}
          </>
          <>
            <button onClick={() => setOpenDelete(true)}>
              <PiTrashDuotone className="text-lg text-error cursor-pointer" />
            </button>
            {openDelete && (
              <Modal
                title={"حذف دسته‌بندی"}
                onClose={() => setOpenDelete(false)}
              >
                <ConfirmDelete
                  onConfirm={handleRemove}
                  disabled={isDeleting}
                  onClose={() => setOpenDelete(false)}
                  resourceName={category?.title}
                />
              </Modal>
            )}
          </>
        </div>
      </td>
    </tr>
  );
};

export default CategoryListItem;

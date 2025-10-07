import { useSearchParams } from "react-router";
import { PiCircleNotchLight } from "react-icons/pi";
import useUserList from "../../../hooks/useUserList";
import UserListItem from "./UserListItem";
import Paginate from "../../../ui/Paginate";

const UsersList = () => {
  const [serachParams] = useSearchParams();
  const page = serachParams.get("page");
  const currentPage = page || 1;

  const { userList, isFetching, isLoadingList } = useUserList();
  const users = userList?.users?.filter((u) => u?.role !== "ADMIN") || [];
  console.log(users);

  const lastIndex = currentPage * 10;
  const firstIndex = lastIndex - 10;
  const records = users?.slice(firstIndex, lastIndex);
  const pageCount = Math.ceil(users?.length / 10);

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-secondary-700">لیست کاربران</h3>
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
                ایمیل
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                شماره موبایل
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                نقش
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                وضعیت
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5 rounded-tl-2xl">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoadingList || isFetching ? (
              <tr>
                <td colSpan={7}>
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
                <td colSpan={7}>
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
              records?.map((user) => (
                <UserListItem
                  key={user?._id}
                  user={user}
                  row={users.indexOf(user)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isLoadingList && !isFetching && records?.length > 0 && (
        <Paginate pageCount={pageCount} />
      )}
    </div>
  );
};

export default UsersList;

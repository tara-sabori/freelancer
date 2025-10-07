import ReactPaginate from "react-paginate";
import { PiCaretLeftFill, PiCaretRightFill } from "react-icons/pi";
import { useSearchParams } from "react-router";

const Paginate = ({ pageCount = 1 }) => {
  const [serachParams, setSearchParams] = useSearchParams();
  const page = serachParams.get("page");
  const currentPage = page || 1;

  const handlePageClick = (data) => {
    serachParams.set("page", data.selected + 1);
    setSearchParams(serachParams);

    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex justify-start mt-14">
      <div className="flex items-center gap-4 bg-primary-50/30 p-1.5 rounded-md">
        <ReactPaginate
          onPageChange={handlePageClick}
          previousLabel={<PiCaretRightFill />}
          nextLabel={<PiCaretLeftFill />}
          pageCount={pageCount}
          pageRangeDisplayed={1}
          containerClassName="flex items-center justify-between gap-2"
          pageLinkClassName={
            "text-secondary-800 w-6 h-6 rounded-md flex text-sm items-center justify-center cursor-pointer"
          }
          activeLinkClassName={
            "border border-primary-500 shadow-[0_0_5px_#00000020] !text-primary-900 w-6 h-6 rounded-md flex items-center justify-center cursor-default"
          }
          previousLinkClassName="text-sm text-primary-900 cursor-pointer"
          nextLinkClassName="text-sm text-primary-900 cursor-pointer"
          disabledLinkClassName="cursor-default"
          key={pageCount}
          forcePage={pageCount > 1 && currentPage - 1}
        />
      </div>
    </div>
  );
};

export default Paginate;

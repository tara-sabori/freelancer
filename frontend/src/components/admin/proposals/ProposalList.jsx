import { useSearchParams } from "react-router";
import { PiCircleNotchLight } from "react-icons/pi";
import ProposalListItem from "./ProposalListItem";
import useFreelancerProposal from "../../../hooks/useFreelancerProposal";
import Paginate from "../../../ui/Paginate";

const ProposalsList = () => {
  const [serachParams] = useSearchParams();
  const page = serachParams.get("page");
  const currentPage = page || 1;

  const { data, isLoadingList } = useFreelancerProposal();
  const proposals = data?.proposals || [];

  const lastIndex = currentPage * 10;
  const firstIndex = lastIndex - 10;
  const records = proposals?.slice(firstIndex, lastIndex);
  const pageCount = Math.ceil(proposals?.length / 10);

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-secondary-700">لیست کل درخواست‌ها</h3>
      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] w-[90%] overflow-x-auto mx-">
          <thead>
            <tr>
              <th className="bg-secondary-100 text-sm font-normal py-1.5 rounded-tr-2xl">
                #
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                توضیحات
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                زمان تحویل
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                هزینه
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5 rounded-tl-2xl">
                وضعیت
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoadingList ? (
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
              records?.map((proposal) => (
                <ProposalListItem
                  key={proposal?._id}
                  proposal={proposal}
                  row={proposals.indexOf(proposal)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isLoadingList && records?.length > 0 && (
        <Paginate pageCount={pageCount} />
      )}
    </div>
  );
};

export default ProposalsList;

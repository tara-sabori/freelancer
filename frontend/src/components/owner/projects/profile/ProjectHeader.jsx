import { toPersianNumbersWithComma } from "../../../../utils/toPersianNumbers";

const ProjectHeader = ({ project }) => {
  return (
    <div className="bg-primary-50/50 border border-primary-900 p-4 rounded-md space-y-4">
      <h3 className="font-semibold text-sm text-secondary-800">
        اطلاعات کلی پروژه
      </h3>
      <div className="space-x-2">
        <span className="text-xs text-secondary-600">عنوان پروژه:</span>
        <span className="text-xs">{project?.title}</span>
      </div>
      <div className="space-x-2">
        <span className="text-xs text-secondary-600">بودجه پروژه:</span>
        <span className="text-xs">
          {toPersianNumbersWithComma(project?.budget)}
        </span>
      </div>
      <div className="space-x-2">
        <span className="text-xs text-secondary-600">توضیحات پروژه:</span>
        <span className="text-xs">{project?.description}</span>
      </div>
    </div>
  );
};

export default ProjectHeader;

import { Link } from "react-router";

const FreelancerSection = () => {
  return (
    <div className="p-6 py-14 bg-secondary-100">
      <div className="container flex flex-col-reverse gap-8 lg:flex-row items-center">
        <div className="basis-1/2">
          <div className="max-w-[400px] mx-auto bg-secondary-50 rounded-xl">
            <img src="/assets/images/home/freelancer.svg" className="w-full" />
          </div>
        </div>
        <div className="basis-1/2 space-y-4 text-right">
          <h3 className="text-secondary-700">فریلنسرها</h3>
          <h4 className="text-shadow-sm font-semibold text-blue-950">
            بهترین فرصت‌های کاری را در فریلاین پیدا کنید
          </h4>
          <p className="text-sm leading-7 text-justify text-secondary-700 pb-2">
            در فریلاین به راحتی می‌تونید پروژه‌های متنوع و متناسب با مهارت‌هاتون
            رو پیدا کنید و با ارسال پیشنهاد به کارفرمایان، فرصت‌های درآمدزایی
            خودتون رو افزایش بدید. هر روز پروژه‌های جدیدی در دسته‌بندی‌های مختلف
            اضافه می‌شه تا بتونید بهترین گزینه‌ها رو انتخاب کنید و رزومه
            کاری‌تون رو با انجام پروژه‌های موفق تقویت کنید.
          </p>
          <Link
            to={"/freelancer/projects"}
            className="p-4 py-2 bg-primary-900 rounded-xl text-sm text-white"
          >
            ‌لیست پروژه‌ها
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreelancerSection;

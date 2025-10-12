import { Link } from "react-router";

const OwnerSection = () => {
  return (
    <div className="p-6 py-14 bg-secondary-100">
      <div className="container flex flex-col-reverse gap-8 lg:flex-row items-center">
        <div className="basis-1/2 space-y-4 text-right">
          <h3 className="text-secondary-700">کارفرمایان</h3>
          <h4 className="text-shadow-sm font-semibold text-blue-950">
            به سادگی افراد متخصص را برای پروژه‌ی خود پیدا کنید
          </h4>
          <p className="text-sm leading-7 text-justify text-secondary-700 pb-2">
            پس از ثبت پروژه در فریلاین، فریلنسرهای متخصص و متعهد پیشنهادهای خود
            را ارسال می‌کنند. شما می‌توانید پیشنهادها را بر اساس قیمت، زمان
            تحویل و توضیحات هر فریلنسر بررسی کنید و بهترین گزینه را برای پروژه
            خود انتخاب کنید. مدیریت پروژه و ارتباط با فریلنسرها به سادگی و از
            طریق پنل کاربری شما انجام می‌شود تا فرایند همکاری سریع و شفاف باشد.
          </p>
          <Link
            to={"/owner/projects"}
            className="p-4 py-2 bg-primary-900 rounded-xl text-sm text-white"
          >
            ثبت پروژه
          </Link>
        </div>
        <div className="basis-1/2">
          <div className="max-w-[500px] mx-auto">
            <img src="/assets/images/home/owner.svg" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerSection;

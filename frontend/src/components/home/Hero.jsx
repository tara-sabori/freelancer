const Hero = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 pt-14 lg:pt-20">
      <div className="space-y-4 text-center lg:text-right order-2 lg:order-1">
        <h1 className="text-3xl font-semibold text-blue-950">فریلنسر</h1>
        <p className="bg-gradient-to-l from-primary-200 via-primary-800 to-blue-950 text-transparent bg-clip-text text-2xl lg:text-3xl font-bold whitespace-nowrap">
          از ایده تا اجرا
        </p>
        <p className="text-sm lg:text-base leading-6 lg:leading-[36px] text-center lg:text-right text-secondary-900">
          در فریلنسو، هر ایده‌ای می‌تواند به واقعیت تبدیل شود. فریلنسرهای متخصص
          آماده‌اند تا پروژه‌های شما را با کیفیت بالا و در زمان مناسب انجام
          دهند. کافیست نیاز خود را تعریف کنید، بهترین‌ها را انتخاب کنید و همکاری
          خود را آغاز کنید. با ما مسیر موفقیت ساده‌تر از همیشه است!
        </p>
      </div>
      <div className="max-w-[500px] mx-auto order-1 lg:order-2">
        <img src="/assets/images/home/project.svg" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;

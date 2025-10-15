import { Link } from "react-router";
const Footer = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#162556"
          fillOpacity="1"
          d="M0,0L80,37.3C160,75,320,149,480,149.3C640,149,800,75,960,53.3C1120,32,1280,64,1360,80L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <footer className="bg-blue-950 p-10 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-20 xl:gap-40">
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-semibold text-lg text-shadow-sm text-secondary-0">
            درباره ما
          </h4>
          <p className="max-w-[300px] text-center md:text-right text-secondary-200 text-sm leading-6">
            فریلاین یه محیط خوب برای کارفرماها و فریلنسرهاست تا راحت و امن با هم
            کار کنن. اگه دنبال انجام پروژه‌هات هستی یا می‌خوای با مهارت‌هات
            درآمد داشته باشی، اینجا جاشه. همه‌چی ساده و شفاف پیش میره و تیم
            فریلاین همیشه همراهته.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-semibold text-lg text-shadow-sm text-secondary-0">
            دسترسی سریع
          </h4>
          <ul className="space-y-4 text-center md:text-right text-secondary-200 text-sm">
            <li>
              <Link to={"/auth"}>ورود/ثبت‌نام</Link>
            </li>
            <li>پشتیبانی</li>
            <li>پیشنهادات</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-semibold text-lg text-shadow-sm text-secondary-0">
            آنچه باید درباره ما بدانید
          </h4>
          <ul className="space-y-4 text-center md:text-right text-secondary-200 text-sm">
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>قوانین و مفررات</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;

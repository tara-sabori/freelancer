import {
  PiCheckCircleDuotone,
  PiHandshakeBold,
  PiNotePencil,
  PiUserDuotone,
} from "react-icons/pi";
import GuidCard from "./GuidCard";

const Guid = () => {
  const guidItems = [
    {
      icon: <PiUserDuotone className="text-primary-900" />,
      title: "ثبت‌نام و ساخت پروفایل",
      description: "به عنوان کارفرما ثبت‌نام کن و پروفایلت رو تکمیل کن.",
    },
    {
      icon: <PiNotePencil className="text-purple-800" />,
      title: "ایجاد پروژه",
      description: "پروژه‌ت رو طبق کسب و کار و نیازی که داری ایجاد کن.",
    },
    {
      icon: <PiCheckCircleDuotone className="text-success" />,
      title: "انتخاب فریلنسر",
      description: "با توجه به درخواست‌هایی که دریافت میکنی فریلنسر انتخاب کن.",
    },
    {
      icon: <PiHandshakeBold className="text-warning" />,
      title: "شروع همکاری",
      description: "با فریلنسر انتخابی ملاقات کن و همکاری رو شروع کن.",
    },
  ];
  return (
    <div className="container space-y-4 p-6 py-20">
      <h4 className="font-semibold text-lg text-shadow-sm text-blue-950">
        نحوه برونسپاری پروژه‌ها در فریلنسو
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {guidItems.map((item, index) => (
          <GuidCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Guid;

import ServicesCard from "../../ui/ServicesCard";
import {
  PiDesktopDuotone,
  PiMegaphoneSimpleDuotone,
  PiPencilRulerDuotone,
  PiVideoCameraDuotone,
} from "react-icons/pi";

const Services = () => {
  const serviceItems = [
    {
      title: "برنامه‌نویسی",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      icon: <PiDesktopDuotone className="text-4xl text-primary-900" />,
    },
    {
      title: "بازاریابی",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      icon: <PiMegaphoneSimpleDuotone className="text-4xl text-primary-900" />,
    },
    {
      title: "تولید محتوا",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      icon: <PiVideoCameraDuotone className="text-4xl text-primary-900" />,
    },
    {
      title: "طراحی گرافیک",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      icon: <PiPencilRulerDuotone className="text-4xl text-primary-900" />,
    },
  ];
  return (
    <div className="container space-y-4 p-6 py-20">
      <h3 className="font-semibold text-blue-950 text-shadow-sm text-base lg:text-lg">
        توی فریلنسو چه خدماتی داریم؟
      </h3>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {serviceItems?.map((item, index) => (
          <ServicesCard
            key={index}
            title={item?.title}
            text={item?.text}
            icon={item?.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

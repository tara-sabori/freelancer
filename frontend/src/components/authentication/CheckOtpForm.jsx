import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import SubmitButton from "../../ui/SubmitButton";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/AuthServices";
import { formatTime } from "../../utils/formatTime";

const DURATION = 90 * 1000;
const CheckOtpForm = ({ onResendOTP, phoneNumber, setCurrentStep }) => {
  const navigate = useNavigate();
  const length = 6;
  const [digits, setDigits] = useState(Array(length).fill("")); // کنترل‌شده
  const [otp, setOtp] = useState(""); // رشتهٔ نهایی
  // const oldTime = sessionStorage.getItem("time");
  // const [time, setTime] = useState(Number(oldTime) || 90);
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const inputRefs = useRef([]);

  // useEffect(() => {
  //   const timer =
  //     time > 0 &&
  //     setInterval(() => {
  //       setTime((t) => t - 1);
  //       sessionStorage.setItem("time", time - 1);
  //     }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [time]);

  useEffect(() => {
    const tick = () => {
      const expiry = Number(sessionStorage.getItem("time")) || 0;
      const diff = expiry - Date.now();
      setTimeLeft(diff > 0 ? diff : 0);
    };

    tick(); // برای مقدار اولیه
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setOtp(digits.join(""));
  }, [digits]);

  const focusInput = (idx) => {
    const el = inputRefs.current[idx];
    if (el) el.focus();
  };

  // وقتی کاربر تایپ یا پیست می‌کنه
  const handleChange = (e, index) => {
    const raw = e.target.value;
    const cleaned = raw.replace(/\D/g, ""); // فقط ارقام
    if (cleaned === "") {
      // خالی شدن هم مجازه
      setDigits((prev) => {
        const next = [...prev];
        next[index] = "";
        return next;
      });
      return;
    }

    // اگه چند رقم پیست شده یا سریع تایپ شده => پخش کن
    setDigits((prev) => {
      const next = [...prev];
      let writeIdx = index;
      for (let ch of cleaned) {
        if (writeIdx >= length) break;
        next[writeIdx] = ch;
        writeIdx++;
      }
      // فوکوس به اولین خانه خالی بعد از نوشتن
      setTimeout(() => {
        const focusTo = writeIdx < length ? writeIdx : length - 1;
        focusInput(focusTo);
      }, 0);
      return next;
    });
  };

  const handleKeyDown = (e, index) => {
    const key = e.key;

    if (key === "Backspace") {
      e.preventDefault(); // جلوگیری از رفتار پیش‌فرض که ممکنه باعث تداخل بشه
      setDigits((prev) => {
        const next = [...prev];
        if (next[index]) {
          // اگر خانه‌ی فعلی پره => همون رو پاک کن
          next[index] = "";
          // فوکوس روی همون خانه بمونه (یا بعد از رندر ممکنه لازم باشه دوباره فوکوس کنیم)
          setTimeout(() => focusInput(index), 0);
        } else if (index > 0) {
          // اگر فعلی خالیه => به قبلی برو و اون رو پاک کن
          next[index - 1] = "";
          setTimeout(() => focusInput(index - 1), 0);
        }
        return next;
      });
      return;
    }

    // جلوگیری از وارد کردن کاراکتر غیر عددی با کیبورد فیزیکی
    if (key.length === 1 && !/\d/.test(key)) {
      e.preventDefault();
      return;
    }

    if (key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      focusInput(index - 1);
    }
    if (key === "ArrowRight" && index < length - 1) {
      e.preventDefault();
      focusInput(index + 1);
    }
  };
  // هندلر پیست (مطمئن‌تر از تکیه به onChange برای پیست)
  const handlePaste = (e, index) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData("text");
    const digitsOnly = paste.replace(/\D/g, "").split("");
    if (digitsOnly.length === 0) return;

    setDigits((prev) => {
      const next = [...prev];
      let writeIdx = index;
      for (let d of digitsOnly) {
        if (writeIdx >= length) break;
        next[writeIdx] = d;
        writeIdx++;
      }
      setTimeout(() => focusInput(Math.min(writeIdx, length - 1)), 0);
      return next;
    });
  };
  const { isPending, data, error, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  const submitHandle = async (e) => {
    e.preventDefault();
    console.log("OTP submitted:", otp);
    const formData = { otp, phoneNumber };
    try {
      const { user, message } = await mutateAsync(formData);
      console.log(user);
      toast.success(message);
      if (!user?.isActive) {
        return navigate("/complete-profile");
      }
      if (user?.status !== 2) {
        navigate("/");
        toast.error("پروفایل شما در انتظار تایید است.");
        return;
      }
      if (user?.role === "OWNER") {
        navigate("/owner");
      } else if (user?.role === "FREELANCER") {
        navigate("/freelancer");
      } else {
        navigate("/admin");
      }
      sessionStorage.removeItem("time");
      sessionStorage.removeItem("phoneNumber");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form className="space-y-4" onSubmit={submitHandle}>
      <div className="flex flex-col gap-4">
        <p className="text-secondary-500 text-xs">
          کد تایید برای شماره موبایل {phoneNumber} ارسال شد
        </p>
        <p className="text-secondary-800 text-sm">کد تایید را وارد کنید</p>
        <div className="flex flex-row-reverse justify-between w-full">
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              value={d}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              onPaste={(e) => handlePaste(e, i)}
              inputMode="numeric"
              pattern="[0-9]*"
              dir="ltr"
              maxLength={1}
              className="w-12 h-12 text-center rounded border border-secondary-400"
              aria-label={`Digit ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          className="text-xs text-secondary-500 cursor-pointer"
          onClick={() => setCurrentStep("1")}
        >
          ویرایش شماره موبایل
        </button>
        {timeLeft > 0 ? (
          <p className="text-xs text-secondary-500 cursor-pointer">
            زمان باقی‌مانده: {formatTime(timeLeft)}
          </p>
        ) : (
          <button
            type="button"
            onClick={async () => {
              const newExpiry = await onResendOTP(); // این همون sendOTP هست
              if (newExpiry) {
                setTimeLeft(newExpiry - Date.now());
              }
            }}
            className="text-xs text-secondary-500 cursor-pointer"
          >
            ارسال مجدد کد
          </button>
        )}
      </div>
      <SubmitButton disabled={otp?.length < 6 || isPending}>تایید</SubmitButton>
    </form>
  );
};

export default CheckOtpForm;

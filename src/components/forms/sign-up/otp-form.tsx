import OTPInput from "@/components/otp";
import React from "react";

type Props = {
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  onOtp: string;
};

const OTPForm = ({ onOtp, setOtp }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Enter OTP</h2>
      <p className="text-iridium md:text-sm">
        Enter the one time password that was sent to your email
      </p>
      <div className="w-full justify-center flex py-5">
        <OTPInput otp={onOtp} setOtp={setOtp} />
      </div>
    </>
  );
};

export default OTPForm;

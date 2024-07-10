"use client";

import { useAuthContextHook } from "@/context/use-auth-context";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import TypeSelectionForm from "./type-selection-form";
import AccountDetailsForm from "./account-details-form";
import OTPForm from "./otp-form";

type Props = {};

const RegistrationFormStep = (props: Props) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const { currentStep } = useAuthContextHook();
  const [onOtp, setOnOtp] = useState<string>("");
  const [onUserType, setOnUserType] = useState<"owner" | "student">("owner");

  setValue("otp", onOtp);

  switch (currentStep) {
    case 1:
      return (
        <TypeSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      );
    case 2:
      return <AccountDetailsForm errors={errors} register={register} />;

    case 3:
      return <OTPForm onOtp={onOtp} setOtp={setOnOtp} />;
  }

  return <div>Registration Form Step</div>;
};

export default RegistrationFormStep;

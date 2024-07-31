"use client";

import { usePortal } from "@/hooks/portal/use-portal";
import { useEffect } from "react";
import PortalSteps from "./portal-steps";

type PortalFormProps = {
  questions: {
    id: string;
    question: string;
    answered: string | null;
  }[];
  type: "Appointment" | "Payment";
  customerId: string;
  domainId: string;
  email: string;
  bookings:
    | {
        date: Date;
        slot: string;
      }[]
    | undefined;
  products?:
    | {
        name: string;
        image: string;
        price: number;
      }[]
    | undefined;
  amount?: number;
  stripeId?: string;
};

const PortalForm = ({
  questions,
  type,
  customerId,
  domainId,
  email,
  bookings,
  products,
  amount,
  stripeId,
}: PortalFormProps) => {
  const {
    step,
    onNext,
    onPrev,
    register,
    errors,
    date,
    setDate,
    onBookAppointment,
    onSelectedTimeSlot,
    selectedSlot,
    loading,
  } = usePortal(customerId, domainId, email);

  useEffect(() => {
    if (questions.every((question) => question.answered)) {
      onNext();
    }
  }, []);

  return (
    <form
      className="h-full flex flex-col gap-10 justify-center"
      onSubmit={onBookAppointment}
    >
      <PortalSteps
        loading={loading}
        slot={selectedSlot}
        bookings={bookings}
        onSlot={onSelectedTimeSlot}
        date={date}
        onBooking={setDate}
        step={step}
        type={type}
        questions={questions}
        error={errors}
        register={register}
        onNext={onNext}
        products={products}
        onBack={onPrev}
        amount={amount}
        stripeId={stripeId}
      />
    </form>
  );
};

export default PortalForm;

import {
  onDomainCustomerResponses,
  onGetAllDomainBookings,
} from "@/actions/appointment";
import PortalForm from "@/components/forms/portal/portal-form";

type Props = {
  params: {
    domainid: string;
    customerid: string;
  };
};

const CustomerSignupForm = async ({ params }: Props) => {
  const questions = await onDomainCustomerResponses(params.customerid);
  const bookings = await onGetAllDomainBookings(params.domainid);

  console.log(questions, bookings, "questions");

  if (!questions) return null;

  return (
    <PortalForm
      bookings={bookings}
      email={questions?.email!}
      domainId={params.domainid}
      customerId={params.customerid}
      questions={questions?.questions}
      type="Appointment"
    />
  );
};

export default CustomerSignupForm;

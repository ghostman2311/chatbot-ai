import { onGetPaymentConnected } from "@/actions/settings";
import InfoBar from "@/components/infobar";

const IntegrationPage = async () => {
  const payment = await onGetPaymentConnected();

  const connections = {
    stripe: payment ? true : false,
  };

  return (
    <>
      <InfoBar />
    </>
  );
};

export default IntegrationPage;

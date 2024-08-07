import { useStripe } from "@/hooks/billing/use-billing";
import { Loader } from "../loader";
import { Button } from "../ui/button";

type StripeConnectProps = {
  connected: boolean;
};

const StripeConnect = ({ connected }: StripeConnectProps) => {
  const { onStripeAccountPending, onStripeConnect } = useStripe();
  return (
    <Button disabled={connected} onClick={onStripeConnect}>
      <Loader loading={onStripeAccountPending}>
        {connected ? "Connected" : "Connect to stripe"}
      </Loader>
    </Button>
  );
};

export default StripeConnect;

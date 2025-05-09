import { CheckCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import StripeConnect from "../settings/stripe-connect";

type IntegrationModalBodyProps = {
  type: string;
  connections: {
    [key in "stripe"]: boolean;
  };
};

const IntegrationModalBody = ({
  type,
  connections,
}: IntegrationModalBodyProps) => {
  switch (type) {
    case "stripe":
      return (
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Stripe would like to access</h2>
          {[
            "Payment and bank information",
            "Products and services you sell",
            "Business and tax information",
            "Create and update Products",
          ].map((item, key) => {
            return (
              <div className="flex gap-2 items-center pl-3" key={key}>
                <CheckCircleIcon />
                <p>{item}</p>
              </div>
            );
          })}
          <div className="flex justify-between mt-10">
            <Button variant="outline">Learn more</Button>
            <StripeConnect connected={connections[type]} />
          </div>
        </div>
      );
  }
};

export default IntegrationModalBody;

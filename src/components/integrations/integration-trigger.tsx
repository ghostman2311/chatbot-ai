import { CloudIcon } from "lucide-react";
import Modal from "../modal";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

type Props = {
  name: "stripe";
  logo: string;
  title: string;
  description: string;
  connections: {
    [key in "stripe"]: boolean;
  };
};

const IntegrationTrigger = ({
  name,
  logo,
  title,
  description,
  connections,
}: Props) => {
  return (
    <Modal
      title={title}
      type="Integration"
      logo={logo}
      description={description}
      trigger={
        <Card className="px-3 py-2 cursor-pointer flex gap-2">
          <CloudIcon />
          {connections[name] ? "connected" : "connect"}
        </Card>
      }
    >
      <Separator orientation="horizontal" />
      
    </Modal>
  );
};

export default IntegrationTrigger;

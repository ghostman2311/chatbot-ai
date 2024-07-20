import { useSettings } from "@/hooks/settings/user-settings";

type Props = {
  id: string;
  name: string;
  plan: "STANDARD" | "PRO" | "ULTIMATE";
  chatbot: {
    id: string;
    icon: string | null;
    welcomeMessage: string | null;
  } | null;
};

const SettingsForm = ({ id, name, plan, chatbot }: Props) => {
  const { register } = useSettings(id);
  return <>Settings form</>;
};

export default SettingsForm;

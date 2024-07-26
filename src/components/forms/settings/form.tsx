"use client";
import { Separator } from "@/components/ui/separator";
import { useSettings } from "@/hooks/settings/use-settings";
import DomainUpdate from "./domain-update";
import CodeSnippet from "./code-snippet";
import PremiumBadge from "@/icons/premium-badge";
import EditChatbotIcon from "./edit-chatbot-icon";
import GreetingsMessage from "./greetings-message";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/loader";

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
  const {
    register,
    onUpdateSettings,
    errors,
    onDeleteDomain,
    deleting,
    loading,
  } = useSettings(id);

  return (
    <form className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-2xl "> Domain Settings</h2>
        <Separator orientation="horizontal" />
        <DomainUpdate name={name} register={register} errors={errors} />
        <CodeSnippet id={id} />
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex gap-4 items-center">
          <h2 className="font-bold text-2xl">Chatbot Settings</h2>
          <div className="flex gap-1 bg-cream rounded-full px-3 py-1 text-xs items-center font-bold">
            <PremiumBadge />
            Premium
          </div>
        </div>
        <Separator orientation="horizontal" />
        <div className="grid md:grid-cols-2">
          <div className="col-span-1 flex flex-col gap-5 order-last md:order-first">
            <EditChatbotIcon
              chatBot={chatbot}
              register={register}
              errors={errors}
            />
            <GreetingsMessage
              register={register}
              errors={errors}
              message={chatbot?.welcomeMessage ?? ""}
            />
          </div>
          <div className="col-span-1 relative">
            <Image
              src="/images/bot-ui.png"
              alt="bot-ui"
              className="sticky top-0"
              width={530}
              height={769}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-end">
        <Button
          type="button"
          onClick={onDeleteDomain}
          className="px-10 h-[50px]"
          variant="destructive"
        >
          <Loader loading={loading}>Delete Domain</Loader>
        </Button>
        <Button type="submit" className="w-[100px] h-[50px]">
          <Loader loading={loading}>Save</Loader>
        </Button>
      </div>
    </form>
  );
};

export default SettingsForm;

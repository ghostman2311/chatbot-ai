import { forwardRef } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import RealTimeMode from "./real-time";
import Image from "next/image";
import TabsMenu from "../tabs";
import { BOT_TABS_MENU } from "@/constants/menu";
import { TabsContent } from "../ui/tabs";
import { Separator } from "../ui/separator";
import Bubble from "./bubble";
import Responding from "./responding";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Paperclip, Send } from "lucide-react";
import { Label } from "../ui/label";
import { CardDescription, CardTitle } from "../ui/card";
import Accordion from "../accordian";

type Props = {
  errors: any;
  register: UseFormRegister<FieldValues>;
  chats: {
    role: "assistant" | "user";
    content: string;
    link?: string;
  }[];
  onChat(): void;
  onResponding: boolean;
  domainName: string;
  theme?: string | null;
  textColor?: string | null;
  help?: boolean;
  realtimeMode:
    | {
        chatroom: string;
        mode: boolean;
      }
    | undefined;
  helpDesk: {
    id: string;
    question: string;
    answer: string;
    domainId: string | null;
  }[];
  setChat: React.Dispatch<
    React.SetStateAction<
      {
        role: "assistant" | "user";
        content: string;
        link?: string | undefined;
      }[]
    >
  >;
};

const BotWindow = forwardRef<HTMLDivElement, Props>(
  (
    {
      errors,
      register,
      chats,
      onChat,
      onResponding,
      domainName,
      theme,
      textColor,
      help,
      realtimeMode,
      helpDesk,
      setChat,
    },
    ref
  ) => {
    return (
      <div className="h-[670px] w-[450px] flex flex-col bg-white rounded-xl mr-[80px] border-[1px] overflow-hidden">
        <div className="flex justify-between px-4 pt-4">
          <div className="flex gap-2">
            <Avatar className="w-20 h-20">
              <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex items-start flex-col">
              <h3 className="text-lg font-bold leading-none">
                Sales rep - Web Prodigies
              </h3>
              <p className="text-sm">{domainName.split(".com")[0]}</p>
              {realtimeMode?.mode && (
                <RealTimeMode
                  setChats={setChat}
                  chatRoomId={realtimeMode.chatroom}
                />
              )}
            </div>
          </div>
          <div className="relative w-16 h-16">
            <Image
              alt="users"
              src="https://ucarecdn.com/019dd17d-b69b-4dea-a16b-60e0f25de1e9/propuser.png"
              fill
              objectFit="contain"
            />
          </div>
        </div>
        <TabsMenu
          triggers={BOT_TABS_MENU}
          className="bg-transparent border-[1px] border-border m-2"
        >
          <TabsContent value="chat">
            <Separator orientation="horizontal" />
            <div className="flex flex-col h-full">
              <div
                className="px-3 flex h-[400px] flex-col py-5 gap-3 chat-window overflow-y-auto"
                style={{
                  background: theme || "",
                  color: textColor || "",
                }}
                ref={ref}
              >
                {chats.map((chat, key) => {
                  return <Bubble key={key} message={chat} />;
                })}
                {onResponding && <Responding />}
              </div>
              <form
                onSubmit={onChat}
                className="flex px-3 py-1 flex-col flex-1 bg-porcelain"
              >
                <div className="flex justify-between">
                  <Input
                    {...register("content")}
                    placeholder="Type your message..."
                    className="focus-visible:ring-0 flex-1 p-0 focus-visible:ring-offset-0 bg-porcelain rounded-none outline-none border-none"
                  />
                  <Button className="mt-3" type="submit">
                    <Send />
                  </Button>
                </div>
                <Label htmlFor="bot-image">
                  <Paperclip />
                  <Input
                    {...register("image")}
                    type="file"
                    id="bot-image"
                    className="hidden"
                  />
                </Label>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="helpdesk">
            <div className="h-[485px] overflow-y-auto overflow-x-hidden p-4 flex flex-col gap-4">
              <div>
                <CardTitle>Help Desk</CardTitle>
                <CardDescription>
                  Browse from a list of question people usually ask
                </CardDescription>
              </div>
              <Separator orientation="horizontal" />
              {helpDesk.map((desk) => {
                return (
                  <Accordion
                    key={desk.id}
                    trigger={desk.question}
                    content={desk.answer}
                  />
                );
              })}
            </div>
          </TabsContent>
        </TabsMenu>
        <div className="flex justify-center">
          <p className="text-gray-400 text-xs">Powered by Nikhil Karnwal</p>
        </div>
      </div>
    );
  }
);

BotWindow.displayName = "BotWindow";

export default BotWindow;

"use client";

import { cn } from "@/lib/utils";
import { useChatbot } from "../../hooks/chatbot/use-chatbot";
import BotWindow from "./window";
import { BotIcon } from "@/icons/bot-icon";
import Image from "next/image";

const AIChatbot = () => {
  const {
    botOpened,
    onOpenChatBot,
    onStartChatting,
    onChats,
    register,
    onAiTyping,
    messageWindowRef,
    currentBot,
    loading,
    setOnChats,
    onRealTime,
    errors,
  } = useChatbot();

  return (
    <div className="h-screen flex flex-col justify-end items-end gap-4">
      {botOpened && (
        <BotWindow
          errors={errors}
          setChat={setOnChats}
          realtimeMode={onRealTime}
          helpDesk={currentBot?.helpdesk}
          domainName={currentBot?.name}
          ref={messageWindowRef}
          help={currentBot?.chatbot?.helpDesk}
          theme={currentBot?.chatbot?.background}
          textColor={currentBot?.chatbot?.textColor}
          chats={onChats}
          register={register}
          onChat={onStartChatting}
          onResponding={onAiTyping}
        />
      )}
      <div
        className={cn(
          "rounded-full relative cursor-pointer shadow-md w-20 h-20 flex items-center justify-center bg-grandis",
          loading ? "invisible" : "visible"
        )}
        onClick={onOpenChatBot}
      >
        {currentBot?.chatbot?.icon ? (
          <Image
            src={`https://ucarecdn.com/${currentBot.chatBot.icon}/`}
            alt="bot"
            fill
          />
        ) : (
          <BotIcon />
        )}
      </div>
    </div>
  );
};

export default AIChatbot;

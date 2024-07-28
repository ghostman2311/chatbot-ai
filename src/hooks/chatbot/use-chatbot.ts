import { ChatBotMessageSchema } from "@/schemas/conversation.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

export const useChatbot = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(ChatBotMessageSchema),
  });

  const [] = useState<
    | {
        name: string;
        chatbot: {
          id: string;
          icon: string | null;
          welcomeMessage: string | null;
          background: string | null;
          textColor: string | null;
          helpDesk: string | null;
        } | null;
        helpdesk: {
          id: string;
          question: string;
          answer: string;
          domainId: string | null;
        }[];
      }
    | undefined
  >();

  const messageWindowRef = useRef<HTMLDivElement | null>(null);
  const [botOpened, setBotOpened] = useState<boolean>(false);
  const onOpenChat = setBotOpened((prev) => !prev);
  const [loading, setLoading] = useState<boolean>();
  const [onChats, setOnChats] = useState<
    {
      role: "assitant" | "user";
      content: string;
      link?: string;
    }[]
  >([]);
  const [onAiTyping, setOnAiTyping] = useState<boolean>(false);
  const [currentBotId, setCurrentBotId] = useState<string>("");
  const [onRealTime, setOnRealTime] = useState<
    | {
        chatroom: string;
        mode: boolean;
      }
    | undefined
  >(undefined);

  const onScrollToBottom = () => {
    messageWindowRef.current?.scroll({
      top: messageWindowRef.current.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    onScrollToBottom();
  }, [onChats, messageWindowRef]);

  return {};
};

"use client";

import { createContext, useContext, useState } from "react";

type ChatInitialValuesProps = {
  realtime: boolean;
  setRealtime: React.Dispatch<React.SetStateAction<boolean>>;
  chatRoom: string | undefined;
  setChatRoom: React.Dispatch<React.SetStateAction<string | undefined>>;
  chats: {
    message: string;
    id: string;
    role: "assistant" | "user" | null;
    createdAt: Date;
    seen: boolean;
  }[];
  setChats: React.Dispatch<
    React.SetStateAction<
      {
        message: string;
        id: string;
        role: "assistant" | "user" | null;
        createdAt: Date;
        seen: boolean;
      }[]
    >
  >;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatInitialValues: ChatInitialValuesProps = {
  chatRoom: undefined,
  setChatRoom: () => undefined,
  chats: [],
  setChats: () => undefined,
  loading: false,
  setLoading: () => undefined,
  realtime: false,
  setRealtime: () => undefined,
};

const ChatContext = createContext(ChatInitialValues);
const { Provider } = ChatContext;

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [chatRoom, setChatRoom] = useState(ChatInitialValues.chatRoom);
  const [loading, setLoading] = useState(ChatInitialValues.loading);
  const [chats, setChats] = useState(ChatInitialValues.chats);
  const [realtime, setRealtime] = useState(ChatInitialValues.realtime);

  const values = {
    chatRoom,
    setChatRoom,
    loading,
    setLoading,
    chats,
    setChats,
    realtime,
    setRealtime,
  };

  return <Provider value={values}>{children}</Provider>;
};

export const useChatContext = () => {
  const state = useContext(ChatContext);

  return state;
};

"use client";
import { useConversation } from "@/hooks/conversation";
import TabsMenu from "../tabs";
import { TABS_MENU } from "@/constants/menu";
import { TabsContent } from "../ui/tabs";
import ConversationSearch from "./search";
import { Loader } from "../loader";
import { CardDescription } from "../ui/card";
import ChatCard from "./chat-card";
import { Separator } from "../ui/separator";

type Props = {
  domains?:
    | {
        name: string;
        id: string;
        icon: string;
      }[]
    | undefined;
};

const ConversationMenu = ({ domains }: Props) => {
  const { register, chatRooms, loading, onGetActiveChatMessages } =
    useConversation();
  return (
    <div className="py-3 px-0">
      <TabsMenu triggers={TABS_MENU}>
        <TabsContent value="unread">
          <ConversationSearch register={register} domains={domains} />
          <div className="flex flex-col">
            <Loader loading={loading}>
              {chatRooms.length ? (
                chatRooms.map((room) => {
                  return (
                    <ChatCard
                      key={room.chatRoom[0].id}
                      seen={room.chatRoom[0].message[0]?.seen}
                      onChat={() =>
                        onGetActiveChatMessages(room.chatRoom[0].id)
                      }
                      createdAt={room.chatRoom[0].message[0]?.createdAt}
                      title={room.email!}
                      description={room.chatRoom[0].message[0]?.message}
                      id={room.chatRoom[0].id}
                    />
                  );
                })
              ) : (
                <CardDescription>No chats for your domain</CardDescription>
              )}
            </Loader>
          </div>
        </TabsContent>
        <TabsContent value="all">
          <Separator orientation="horizontal" className="mt-5" />
          all
        </TabsContent>
        <TabsContent value="expired">
          <Separator orientation="horizontal" className="mt-5" />
          expired
        </TabsContent>
      </TabsMenu>
    </div>
  );
};

export default ConversationMenu;

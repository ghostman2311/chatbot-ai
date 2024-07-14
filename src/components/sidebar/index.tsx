"use client";
import useSidebar from "@/hooks/sidebar/use-sidebar";
import { cn } from "@/lib/utils";
import MaximisedMenu from "./maximized-menu";
import MinimisedMenu from "./minimised-menu";

type Props = {
  domains:
    | {
        id: string;
        name: string;
        icon: string;
      }[]
    | null
    | undefined;
};

const Sidebar = ({ domains }: Props) => {
  const { expand, onExpand, page, onSignOut } = useSidebar();

  return (
    <div
      className={cn(
        "bg-cream dark:bg-neutral-950 h-full w-[60px] fill-mode-forwards fixed md:relative",
        expand == undefined && expand == true
          ? "animate-open-sidebar"
          : expand == false && "animate-close-sidebar"
      )}
    >
      {expand ? <MaximisedMenu /> : <MinimisedMenu />}
    </div>
  );
};

export default Sidebar;

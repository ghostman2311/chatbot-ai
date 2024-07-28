import CalIcon from "@/icons/cal-icon";
import ChatIcon from "@/icons/chat-icon";
import DashboardIcon from "@/icons/dashboard-icon";
import EmailIcon from "@/icons/email-icon";
import IntegrationsIcon from "@/icons/integrations-icon";
import SettingsIcon from "@/icons/settings-icon";
import StarIcon from "@/icons/star-icon";
import TimerIcon from "@/icons/timer-icon";

type SIDE_BAR_MENU_PROPS = {
  label: string;
  icon: JSX.Element;
  path: string;
};

type TABS_MENU_PROPS = {
  label: string;
  icon?: JSX.Element;
};

export const SIDE_BAR_MENU: SIDE_BAR_MENU_PROPS[] = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "dashboard",
  },
  {
    label: "Conversations",
    icon: <ChatIcon />,
    path: "conversation",
  },
  {
    label: "Integrations",
    icon: <IntegrationsIcon />,
    path: "integration",
  },
  {
    label: "Settings",
    icon: <SettingsIcon />,
    path: "settings",
  },
  {
    label: "Appointments",
    icon: <CalIcon />,
    path: "appointment",
  },
  {
    label: "Email Marketing",
    icon: <EmailIcon />,
    path: "email-marketing",
  },
];

export const HELP_DESK_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: "help desk",
  },
  {
    label: "questions",
  },
];

export const TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: "unread",
    icon: <EmailIcon />,
  },
  {
    label: "all",
    icon: <EmailIcon />,
  },
  {
    label: "expired",
    icon: <TimerIcon />,
  },
  {
    label: "starred",
    icon: <StarIcon />,
  },
];

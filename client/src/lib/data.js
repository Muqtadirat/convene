import { Books, Elements, Bell, Pie } from "src/icons";

export const NavItems = [
  // {
  //   title: "Home",
  //   href: "/",
  // },

  {
    title: "Create Group",
    href: "/signup",
  },

  {
    title: "Sign Up",
    href: "/signup",
    isButton: true,
  },

  {
    title: "Login",
    href: "/login",
    isButton: true,
  },
];

export const SidebarItems = [
  {
    label: "Overview",
    href: "/admindashboard",
    Icon: Elements,
  },
  {
    label: "Meetups",
    href: "/meetups",
    Icon: Books,
  },
  {
    label: "Notifications",
    href: "/notifications",
    Icon: Bell,
  },
  {
    label: "Analytics",
    href: "/",
    Icon: Pie,
  },
];

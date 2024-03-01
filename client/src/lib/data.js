import { Books, Elements, Bell, Pie, CornerDownRight } from "src/icons";

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
    title: "Overview",
    href: "/admindashboard",
    Icon: Elements,
  },
  {
    title: "Meetups",
    href: "/meetups",
    Icon: Books,
    subLink: [
      {
        title: "Create",
        href: "/meetups",
        Icon: CornerDownRight,
      },
      {
        title: "Drafts",
        href: "/meetups",
        Icon: CornerDownRight,
      },
    ],
  },
  {
    title: "Notifications",
    href: "/notifications",
    Icon: Bell,
  },
  {
    title: "Analytics",
    href: "/",
    Icon: Pie,
  },
];

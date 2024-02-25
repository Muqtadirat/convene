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
    label: "Overview",
    href: "/admindashboard",
    Icon: Elements,
  },
  {
    label: "Meetups",
    href: "/meetups",
    Icon: Books,
    subLink: [
      {
        label: "Create",
        href: "/meetups",
        Icon: CornerDownRight,
      },
      {
        label: "Drafts",
        href: "/meetups",
        Icon: CornerDownRight,
      }
    ]
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

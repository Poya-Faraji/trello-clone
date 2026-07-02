import { type ComponentProps, type ReactNode, use } from "react";

import clsx from "clsx";

import Initials from "@/components/Initials/Initials";

import BoardContext from "@/context/board-context";

import MingcuteHome7Line from "@/icons/MingcuteHome7Line";
import MingcuteSettings5Line from "@/icons/MingcuteSettings5Line";

import { useSidebarStore } from "@/stores/sidebar-store";

import SidebarItem from "../SidebarItem/SidebarItem";

import styles from "./SidebarGroups.module.css";

type SidebarGroup = {
  title?: string;
  items: ComponentProps<typeof SidebarItem>[];
};

export default function SidebarGroups(): ReactNode {
  const { boards } = use(BoardContext);

  const isCollapsed = useSidebarStore((state) => state.isCollapsed);

  const groups: SidebarGroup[] = [
    {
      items: [
        {
          href: "/",
          title: "Home",
          color: "blue",
          icon: <MingcuteHome7Line />,
        },
      ],
    },
    {
      title: "Boards",
      items: boards.map((board) => ({
        href: `/board/${board.id}`,
        title: board.title,
        color: board.color,
        icon: <Initials title={board.title} color={board.color} />,
      })),
    },

    {
      title: "System",
      items: [
        {
          href: "/settings",
          title: "Settings",
          color: "orange",
          icon: <MingcuteSettings5Line />,
        },
      ],
    },
  ];

  return groups.map((group, index) => (
    <div
      key={index}
      className={clsx(styles.group, isCollapsed && styles.collapsed)}
    >
      {group.title && (
        <div className={styles.title}>
          {isCollapsed ? group.title[0] : group.title}
        </div>
      )}
      <ul>
        {group.items.map((item) => (
          <li key={item.href}>
            <SidebarItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  ));
}

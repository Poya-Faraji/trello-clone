import { type ReactNode } from "react";

import { Link } from "react-router";

import clsx from "clsx";

import MingcuteArrowsRightLine from "@/icons/MingcuteArrowsRightLine";
import MingcuteExitLine from "@/icons/MingcuteExitLine";

import { useSidebarStore } from "@/stores/sidebar-store";

import IconsButton from "../IconButton/IconsButton";
import Logo from "../Logo/Logo";
import SidebarGroups from "./component/SidebarGroups/SidebarGroups";
import SidebarItem from "./component/SidebarItem/SidebarItem";

import styles from "./Sidebar.module.css";

export default function Sidebar(): ReactNode {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);
  const fold = useSidebarStore((state) => state.fold);

  return (
    <aside className={clsx(styles.sidebar, isCollapsed && styles.collapsed)}>
      <div className={styles.header}>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
        <IconsButton className={styles.arrow} onClick={fold}>
          <MingcuteArrowsRightLine />
        </IconsButton>
      </div>
      <nav>
        <SidebarGroups />
      </nav>
      <div className={styles.footer}>
        <SidebarItem
          id="signout"
          title="Sign Out"
          color="gray"
          icon={<MingcuteExitLine />}
        />
      </div>
    </aside>
  );
}

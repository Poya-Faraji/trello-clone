import type { ReactNode } from "react";

import { Link } from "react-router";

import clsx from "clsx";

import MingcuteExitLine from "@/icons/MingcuteExitLine";

import SidebarGroups from "./component/SidebarGroups/SidebarGroups";
import SidebarItem from "./component/SidebarItem/SidebarItem";

import styles from "./Sidebar.module.css";

export default function Sidebar(): ReactNode {
  return (
    <aside className={clsx(styles["sidebar"], styles.collapsed)}>
      <div className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img src="/logo.svg" alt="Canban Logo" />
        </Link>
      </div>

      <nav>
        <SidebarGroups />
      </nav>

      <div className={styles.footer}>
        <SidebarItem
          title="Sign Out"
          color="gray"
          icon={<MingcuteExitLine />}
        />
      </div>
    </aside>
  );
}

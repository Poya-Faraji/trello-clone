import { type ReactNode, useState } from "react";

import { Link } from "react-router";

import clsx from "clsx";

import MingcuteArrowsRightLine from "@/icons/MingcuteArrowsRightLine";
import MingcuteExitLine from "@/icons/MingcuteExitLine";

import IconsButton from "../IconButton/IconsButton";
import SidebarGroups from "./component/SidebarGroups/SidebarGroups";
import SidebarItem from "./component/SidebarItem/SidebarItem";
import { SidebarContext } from "./context/sidebar-context";

import styles from "./Sidebar.module.css";

export default function Sidebar(): ReactNode {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleArrowClick = (): void => {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  };

  return (
    <SidebarContext
      value={{
        isCollapsed,
      }}
    >
      <aside className={clsx(styles.sidebar, isCollapsed && styles.collapsed)}>
        <div className={styles.header}>
          <Link to="/" className={styles.logo}>
            {isCollapsed ? (
              <img src="/favicon.svg" alt="Canban Logo" />
            ) : (
              <p className={styles.canban}>Canban</p>
            )}
          </Link>
          <IconsButton className={styles.arrow} onClick={handleArrowClick}>
            <MingcuteArrowsRightLine />
          </IconsButton>
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
    </SidebarContext>
  );
}

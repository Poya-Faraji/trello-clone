import type { ReactNode } from "react";

import { Outlet } from "react-router";

import BoardsProvider from "@/Provider/BoardProvider";

import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";

import styles from "./RootLayout.module.css";

export default function RootLayout(): ReactNode {
  return (
    <BoardsProvider>
      <div className={styles["root-layout"]}>
        <main>
          <Outlet />
        </main>
        <Sidebar />
        <Footer />
      </div>
    </BoardsProvider>
  );
}

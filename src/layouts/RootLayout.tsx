import type { ReactNode } from "react";

import { Outlet } from "react-router";

import BoardsProvider from "@/Provider/BoardProvider";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import styles from "./RootLayout.module.css";

export default function RootLayout(): ReactNode {
  return (
    <BoardsProvider>
      <div className={styles["root-layout"]}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </BoardsProvider>
  );
}

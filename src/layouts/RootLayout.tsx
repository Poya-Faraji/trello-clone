import type { ReactNode } from "react";

import { Outlet } from "react-router";

import Footer from "@/components/Footer/Footer";
import ModalContainer from "@/components/ModalContainer/ModalContainer";
import Sidebar from "@/components/Sidebar/Sidebar";

import styles from "./RootLayout.module.css";

export default function RootLayout(): ReactNode {
  return (
    <div className={styles["root-layout"]}>
      <main>
        <Outlet />
      </main>
      <Sidebar />
      <Footer />
      <ModalContainer />
    </div>
  );
}

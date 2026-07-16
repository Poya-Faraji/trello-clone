import { type ReactNode } from "react";

import { Route, Routes } from "react-router";

import RootLayout from "./layouts/RootLayout";
import BoardPage from "./pages/BoardPage/BoardPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SettingsPage from "./pages/SettingPage/SettingsPage";

export default function App(): ReactNode {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="board/:boardId" element={<BoardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

import { type ReactNode } from "react";

import { Route, Routes } from "react-router";

import { ErrorBoundary } from "react-error-boundary";

import RootLayout from "./layouts/RootLayout";
import BoardPage from "./pages/BoardPage/BoardPage";
import HomePage from "./pages/HomePage/HomePage";
import SettingsPage from "./pages/SettingPage/SettingsPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

export default function App(): ReactNode {
  return (
    // <ErrorBoundary FallbackComponent={ErrorPage}>
    <ErrorBoundary fallback={<ErrorPage />}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="board/:boardId" element={<BoardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

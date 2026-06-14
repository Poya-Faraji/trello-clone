import { type ReactNode } from "react";

import { Route, Routes } from "react-router";

import BoardPage from "./pages/BoardPage/BoardPage";
import HomePage from "./pages/HomePage/HomePage";
import RootLayout from "./layouts/RootLayout";


export default function App(): ReactNode {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="board/:id" element={<BoardPage />} />
      </Route>
    </Routes>
  );
}

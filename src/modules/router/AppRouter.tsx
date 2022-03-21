import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import HeroesRoutes from "../pages/heroes/router";
// const HeroesRoutes = React.lazy(() => import("../pages/heroes/router"));

const AppRouter = () => {
  return (
    <Routes>
      {/* {["/", "/heroes/*"].map((path, index) => {
        return <Route path={path} element={<HeroesRoutes />} key={index} />;
      })} */}
      <Route path={"/heroes/*"} element={<HeroesRoutes />} />;
      <Route path="*" element={<Navigate to="/heroes" replace />} />
    </Routes>
  );
};

export default AppRouter;

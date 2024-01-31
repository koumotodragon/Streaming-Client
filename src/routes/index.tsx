import React from "react";
import { Route, Routes } from "react-router-dom";
import { Public } from "./Router";

const AppRouter: React.FC = () => {
  return (
    <div>
      <Routes>
        {Public.map((R) => (
          <Route key={R.path} path={R.path} element={<R.element />} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;

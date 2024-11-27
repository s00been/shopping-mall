import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
 
const Layout: React.FC = () => {
  return (
    <div className="mx-auto max-w-none md:max-w-4xl lg:max-w-7xl">
      <Suspense fallback={"loading..."}>
        <Outlet />
      </Suspense>
    </div>
  );
};
 
export default Layout;
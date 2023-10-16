import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <div>
      <div>Header here</div>
      <div>
        <Outlet />
      </div>
      <div>Footer</div>
    </div>
  );
};

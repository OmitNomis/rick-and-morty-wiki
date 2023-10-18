import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <div className="flex">
        <Outlet />
      </div>
      <div>Footer</div>
    </div>
  );
};

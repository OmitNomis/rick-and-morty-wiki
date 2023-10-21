import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MaxWidthComponent } from "@/components/ui/MaxWidthComponent";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <MaxWidthComponent className="flex flex-grow flex-col">
        <Outlet />
      </MaxWidthComponent>
      <Footer />
    </div>
  );
};

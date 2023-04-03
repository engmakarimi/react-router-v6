import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

type DashboardLayoutProps = {};

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <div className="container">
      <Header />
      <main className="main mt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;

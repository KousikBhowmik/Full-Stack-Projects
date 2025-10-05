import { ReactNode } from "react";
import DashboardLayout from "./_components/dashboard-layout";

type LayoutPropes = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPropes) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
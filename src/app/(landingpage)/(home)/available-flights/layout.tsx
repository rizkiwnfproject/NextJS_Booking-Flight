import React, { type FC, type ReactNode } from "react";
import QCProvider from "./provides/query-provider";
import FlightProvider from "./provides/flight-provider";
interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <QCProvider>
      <FlightProvider>{children}</FlightProvider>
    </QCProvider>
  );
};
export default Layout;

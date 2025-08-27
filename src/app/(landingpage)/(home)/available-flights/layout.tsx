import React, { Suspense, type FC, type ReactNode } from "react";
import QCProvider from "./provides/query-provider";
import FlightProvider from "./provides/flight-provider";
import LoadingLayout from "./components/loading-layout";
interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <QCProvider>
      {/* <FlightProvider>{children}</FlightProvider> */}
      <Suspense fallback={<LoadingLayout />}>
        <FlightProvider>{children}</FlightProvider>
      </Suspense>
    </QCProvider>
  );
};
export default Layout;

import { Outlet } from "react-router";
import { Navigation } from "../navigation/navigation";

export const RouteWithNavigation = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

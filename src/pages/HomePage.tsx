import { Outlet } from "react-router";

export const HomePage = () => {

  return (
    <div className="flex flex-wrap">
      <Outlet />
    </div>
  );
};

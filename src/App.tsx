import { Outlet } from "react-router-dom/dist";

import { ConfigWrapper } from "./configs/wrappers";

export default function App() {
  return (
    <ConfigWrapper>
      <Outlet />
    </ConfigWrapper>
  );
}

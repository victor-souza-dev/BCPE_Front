import { Outlet } from "react-router-dom/dist";

import { ConfigWrapper } from "./configs/wrappers";

export default function App() {
  return (
    <ConfigWrapper>
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
    </ConfigWrapper>
  );
}

import { Outlet } from "react-router-dom/dist";

import { ConfigWrapper } from "./configs/wrappers";
import { Navbar } from "./shared/components/Navbar";

export default function App() {
  return (
    <ConfigWrapper>
      <div style={{ minHeight: "100vh" }}>
        <Navbar />
        <Outlet />
      </div>
    </ConfigWrapper>
  );
}

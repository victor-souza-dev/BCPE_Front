import ReactDOM from "react-dom/client";

import Router from "src/routes/Router";

import { InitPipeline } from "./configs/init/Pipeline";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <InitPipeline>
    <Router />
  </InitPipeline>,
);

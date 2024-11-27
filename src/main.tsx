import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { worker } from "./mocks/browser";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (import.meta.env.DEV) {
  worker.start();
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Tabutton from "./Tabutton.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
//ReactDOM.createRoot(entryPoint).render(<Tabutton />);

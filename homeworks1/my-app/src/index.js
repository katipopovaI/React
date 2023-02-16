import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import { Header } from "./App";
//import reportWebVitals from "./reportWebVitals";
//import { element } from "prop-types";
///////////////////////////////////////////
//impotr React, {StrictMode} from 'reactr;
//тогда записываем строгий режим как <StrictMode> вместо <React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <App />
  </React.StrictMode>
);

//homework1
// const text = "Hello world";
// const element = (
//   <div>
//     <h1 className="text">текст {text}</h1>
//     <h2>{2 + 2}</h2>
//     <h2>{["java", "script"]}</h2>
//     <input type="text" />
//     <button tabIndex="0">click</button>
//     <div>
//       <input type="checkbox" id="check1" />
//       <label htmlFor="check1">checkbox</label>
//     </div>
//   </div>
// );

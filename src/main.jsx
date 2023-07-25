import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";

import "/src/index.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home/";
import { SignUp } from "./pages/SignUp/";
import { SignIn } from "./pages/SignIn/";

import { Details } from "./pages/Details/";
import { New } from "./pages/New/";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <New />
    </ThemeProvider>
  </React.StrictMode>
);

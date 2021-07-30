import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/globalStyles";
import { theme } from "../theme/theme";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

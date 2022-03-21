import React from "react";

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import theme from "./app/themes";
import { useAppSelector } from "./app/hooks/useRedux";
import AppRouter from "./modules/router/AppRouter";
import { MainLayout } from "./modules/shared/layout/MainLayout";

function App() {
  const customization = useAppSelector((state) => state.customization);
  //
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme(customization)}>
          <CssBaseline />
          <MainLayout>
            <AppRouter />
          </MainLayout>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Appbar, Menu, Sidebar } from "./components";
import { Blotter, Dashboard, TradeTicket } from "./components/features";
import { BLOTTER, MAIN, ROUTES, TRADETICKET } from "./routes";
import { Route, Routes } from "react-router-dom";
function App() {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");

  const [sidebarToggle, setSidebarToggle] = useState(false);
  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });

  const handleDrawerToggle = React.useCallback(() => {
    setSidebarToggle(!sidebarToggle);
  }, [sidebarToggle]);
  const onThemeChange = React.useCallback(() => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  }, [themeMode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar
        handleDrawerToggle={handleDrawerToggle}
        onThemeChange={onThemeChange}
        isDarkMode={themeMode === "dark"}
        isDrawerOpen={sidebarToggle}
      />
      <Sidebar
        isOpen={sidebarToggle}
        handleDrawerToggle={handleDrawerToggle}
        children={<Menu links={ROUTES} />}
      />
      <Routes>
        <Route path={MAIN} element={<Dashboard />} />
        <Route path={BLOTTER} element={<Blotter />} />
        <Route path={TRADETICKET} element={<TradeTicket />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

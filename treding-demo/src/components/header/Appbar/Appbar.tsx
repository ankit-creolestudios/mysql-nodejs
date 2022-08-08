import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Switch as ThemeSwitch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface AppbarProps {
  isDarkMode: boolean;
  isDrawerOpen: boolean;
  handleDrawerToggle: () => void;
  onThemeChange: () => void;
}
export const Appbar = ({
  handleDrawerToggle,
  isDrawerOpen,
  onThemeChange,
  isDarkMode,
}: AppbarProps) => {
  return (
    <div>
      <AppBar position="static" variant="elevation" className="appbar-wrapper">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, ...(isDrawerOpen && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="subtitle2"
            component={"div"}
            sx={{ flexGrow: 1 }}
          >
            Treding Demo
          </Typography>
          {isDarkMode ? <DarkModeIcon /> : null}
          <ThemeSwitch
            size="small"
            onChange={onThemeChange}
            color={"success"}
          />
          {!isDarkMode ? <LightModeIcon /> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

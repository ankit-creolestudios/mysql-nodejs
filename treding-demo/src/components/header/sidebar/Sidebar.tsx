import { Divider, Drawer, IconButton, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled, useTheme } from "@mui/material/styles";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const LogoStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));
interface SidebarProps {
  isOpen: boolean;
  handleDrawerToggle: () => void;
  children: JSX.Element;
}
export const Sidebar = ({
  isOpen,
  handleDrawerToggle,
  children,
}: SidebarProps) => {
  const theme = useTheme();
  return (
    <>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MUIDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <DrawerHeader>
          <LogoStyled>
            <Typography variant="subtitle2" component={"div"} align="left">
              Treding Logo
            </Typography>
          </LogoStyled>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {children}
      </Drawer>
    </>
  );
};

import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { RouteType } from "../../../routes/index";
import { useNavigate } from "react-router-dom";
interface menuProps {
  links: RouteType[];
}
export const Menu = ({ links }: menuProps) => {
  const navigation = useNavigate();
  return (
    <div>
      Menu
      <div>
        <MenuList>
          {links?.map((link) => (
            <MenuItem key={link.path} onClick={() => navigation(link.path)}>
              <ListItemIcon>{<link.icon fontSize="small" />}</ListItemIcon>
              <ListItemText>{link.label}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </div>
    </div>
  );
};

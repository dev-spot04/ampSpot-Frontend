import {
  DarkMode,
  Edit,
  Help,
  Logout,
  Menu as MenuIcon,
  Notifications,
  NotificationsActiveRounded,
  Settings,
  Star,
} from "@mui/icons-material";
import { Avatar, Divider, Menu, MenuItem, MenuList } from "@mui/material";
import { useState } from "react";
import { assets } from "../../assets";

const DashboardHeader = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notify, setNotify] = useState(true);
  const open = Boolean(anchorEl);
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };
  const notifyHandler = () => {
    setNotify(!notify);
  };
  const sxIcons = { color: "#98B3E1" };
  return (
    <header className="2xl:h-24 h-16 flex justify-between items-center px-5">
      {children}
      <div className="flex gap-2">
        <button
          type="button"
          className="bg-lightBlue/10 rounded-full w-9"
          onClick={notifyHandler}
        >
          {notify ? (
            <>
              <div className="h-2 w-2 bg-red-500 mb-[-0.5rem] float-right rounded-full"></div>
              <NotificationsActiveRounded />
            </>
          ) : (
            <Notifications />
          )}
        </button>
        <div className="flex gap-2 rounded-full bg-lightBlue/10 px-2 py-1">
          <button
            type="button"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={openMenu}
          >
            <MenuIcon />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={closeMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              sx: {
                background: "#0D1322",
                color: "#98B3E1",
                width: "13rem",
                borderRadius: "10px",
              },
            }}
          >
            <MenuItem onClick={closeMenu} className="flex gap-3 items-center">
              <Edit sx={{ fontSize: "1rem" }} />
              <p>Profile</p>
            </MenuItem>
            <MenuItem onClick={closeMenu} className="flex gap-3 items-center">
              <Settings sx={{ fontSize: "1rem" }} />
              <p>Settings</p>
            </MenuItem>
            <Divider
              sx={{
                border: "0.5px solid #98B3E1",
                width: "88%",
                position: "relative",
                marginX: "auto",
                opacity: "0.5",
              }}
            />
            <MenuItem onClick={closeMenu} className="flex gap-3 items-center">
              <Star sx={{ fontSize: "1rem" }} />
              <p>Go Pro</p>
            </MenuItem>
            <MenuItem onClick={closeMenu} className="flex gap-3 items-center">
              <DarkMode sx={{ fontSize: "1rem" }} />
              <p>Dark Mode</p>
            </MenuItem>
            <MenuItem onClick={closeMenu} className="flex gap-3 items-center">
              <Help sx={{ fontSize: "1rem" }} />
              <p>Help</p>
            </MenuItem>
            <MenuItem onClick={closeMenu} className="flex gap-3 items-center">
              <Logout sx={{ fontSize: "1rem" }} />
              <p>Log Out</p>
            </MenuItem>
          </Menu>

          <button type="button" className="w-7 rounded-full">
            <Avatar
              alt="Remy Sharp"
              src={assets.auth.backgrounds.bg_2}
              sx={{ width: "1.8rem", height: "1.8rem" }}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
export default DashboardHeader;

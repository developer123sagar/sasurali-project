import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";

export default function MenuDashboard() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //logout
  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <>
      <Box>
          <button
            onClick={handleClick}
            size="medium"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <HiUserCircle size={30} />
          </button>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar />
          <p className="text-xl font-bold ml-4 text-black">Profile</p>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Settings fontSize="large" />
          <p className="text-xl font-bold ml-8 text-black">Settings</p>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Logout fontSize="large" />
          <p className="text-xl font-bold ml-8 text-black">Logout</p>
        </MenuItem>
      </Menu>
    </>
  );
}

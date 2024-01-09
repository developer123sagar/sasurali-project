import React, { useState } from "react";
import { Navitems } from "constant/Navbar/text";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";

const MenuDrawer = () => {
  const [state, setState] = useState({ left: false });
  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className="h-full drawerBg"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Navitems.map((text, id) => (
          <Link to={text.to} key={text.name + id}>
            <ListItem className="w-full  border-b-[1px] border-primary">
              <ListItemButton onClick={toggleDrawer(anchor, false)}>
                <Typography variant="body1" style={{ fontSize: "16px",fontFamily:"Inter" ,color:'black', }}>
                  {text.name}
                </Typography>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <img
          src="https://cdn.discordapp.com/attachments/1123144974683361401/1123145321929768970/My_project.png"
          alt="sasurali"
          className="w-full h-[220px] mt-10 object-contain"
        />
      </List>
    </div>
  );
  return (
    <>
      {["left"].map((anchor, id) => (
        <React.Fragment key={`left ${id}.${anchor}`}>
          <div className="lg:hidden bg-tertiry rounded py-2 px-4">
          <HiMenuAlt1
            onClick={toggleDrawer(anchor, true)}
            color="white"
            className="text-[30px] lg:hidden hover:cursor-pointer"
          />

          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              style: {
                width: "80%",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default MenuDrawer;

import * as React from "react";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const ss = true;
const SideDrawer = ({ DrawerOpener, onClose }) => {
  const links = [
    { where: "featured", value: "To Top" },
    { where: "venuinfo", value: "The Venue Nfo" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];
  return (
    <Drawer anchor="right" open={DrawerOpener} onClose={onClose}>
      <List component="nav">
        {links.map((link) => {
          return (
            <ListItem button key={link.where} onClick={() => alert(link.where)}>
              {link.value}
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default SideDrawer;

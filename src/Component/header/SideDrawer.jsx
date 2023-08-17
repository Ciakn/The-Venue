import * as React from "react";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Scroller } from "react-scroll/modules/mixins/scroller";
import { scroller } from "react-scroll";

const SideDrawer = ({ DrawerOpener, onClose }) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      smouth: true,
      offset: -50,
    });
    onClose(false);
  };
  const links = [
    { where: "featured", value: "To Top" },
    { where: "venuinfo", value: "The Venue Nfo" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
  
  ];
  return (
    <Drawer anchor="right" open={DrawerOpener} onClose={onClose}>
      <List component="nav">
        {links.map((link) => {
          return (
            <ListItem
              button
              href="#pricing"
              key={link.where}
              onClick={() => scrollToElement(link.where)}
            >
              {link.value}
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default SideDrawer;

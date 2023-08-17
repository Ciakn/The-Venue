import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";
import { useState } from "react";
import { useEffect } from "react";
const Header = () => {
  const [DrawerOpener, setDrawerOpener] = useState(false);
  const [ScrollValue, setScrollValue] = useState(false);
  const scrollHandler = () => {
    window.scrollY > 0 ? setScrollValue(false) : setScrollValue(true);
   
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);
  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: ScrollValue ? "transparent" : "#2f2f2f",
        boxShadow: "none",
        padding: "10px 0px",
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous  header_logo_venue">The Venue</div>
          <div className="header_logo_title">Musical Eevent</div>
        </div>
        <IconButton
          aria-label="menu"
          color="inherit"
          onClick={() => setDrawerOpener(!DrawerOpener)}
        >
          <MenuIcon />
        </IconButton>
        <SideDrawer
          DrawerOpener={DrawerOpener}
          onClose={() => setDrawerOpener(!DrawerOpener)}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

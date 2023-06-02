import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Styles/Nav.css";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

  const [mobileview,setmobileview] = useState(false);

  const handleDrawer = () => {
      setmobileview(!mobileview);
  }

  const drawer = (
    <Box onClick={handleDrawer} sx={{textAlign: 'center'}}>
    <Typography variant="h6" component="div" sx={{ padding: "15px 0",flexGrow: 1, fontSize: "large",color:"midnightblue" }}>GRAND Restaurant</Typography>
    <Divider />
      <ul className="mobile_nav_ul">
         <li>
            <NavLink to={"/"} >Home</NavLink>
         </li>
         <li>
            <NavLink to={"/About"} >About</NavLink>
         </li>
         <li>
            <NavLink to={"/Contact"} >Contact</NavLink>
         </li>
         <li>
            <NavLink to={"/Menu"} >Menu</NavLink>
         </li>
         <li>
            <NavLink to={"/Shop"} >Shop</NavLink>
         </li>
      </ul>
    </Box>
  )


  return (
    <div>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{bgcolor: "midnightblue" }}>
          <Toolbar>  
            <IconButton>
              <MenuIcon color="inherit" aria-label="open drawer" edge="start" sx={{mr: 3, display:{sm: "none"}}} onClick={handleDrawer}/>
            </IconButton>          
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: "large" }}>GRAND Restaurant</Typography>
             <Box sx={{display:{xs: "none", sm: "block"}}}>
               <ul className="nav_ul">
                  <li>
                     <NavLink to={"/"} >Home</NavLink>
                  </li>
                  <li>
                     <NavLink to={"/About"} >About</NavLink>
                  </li>
                  <li>
                     <NavLink to={"/Contact"} >Contact</NavLink>
                  </li>
                  <li>
                     <NavLink to={"/Menu"} >Menu</NavLink>
                  </li>
                  <li>
                     <NavLink to={"/Shop"} >Shop</NavLink>
                  </li>
               </ul>
             </Box>
          </Toolbar>
        </AppBar>
        <Box>
        <Drawer variant="temporary" open={mobileview} onClose={handleDrawer} sx={{display: { xs: "block", sm: "none" },"& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "240px",
          },
        }}
      >
        {drawer}
      </Drawer>
        </Box>
      </Box>
    </div>
  );
}
export default Navbar;

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./Styles/Nav.css";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, bgcolor: "midnightblue" }}>
        <AppBar position="static">
          <Toolbar>            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: "large" }}>GRAND Restaurant</Typography>
             <Box sx={{display:{xs: "none", sm: "block"}}}>
               <ul className="nav_ul">
                  <li>
                     <Link to={"/"} >Home</Link>
                  </li>
                  <li>
                     <Link to={"/About"} >About</Link>
                  </li>
                  <li>
                     <Link to={"/Contact"} >Contact</Link>
                  </li>
                  <li>
                     <Link to={"/Menu"} >Menu</Link>
                  </li>
                  <li>
                     <Link to={"/Shop"} >Shop</Link>
                  </li>
               </ul>
             </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
export default Navbar;

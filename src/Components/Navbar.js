import { AppBar, Box, Button, Dialog, DialogContent, DialogContentText,DialogActions, DialogTitle, Divider, Drawer, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Styles/Nav.css";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {

  const [mobileview,setmobileview] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
      setmobileview(!mobileview);
  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




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
         <li>
            <Button variant="outlined" onClick={handleClickOpen} sx={{color:"inherit",border:"1px solid white"}}>Reservation</Button>
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
                  <li>
                     <Button variant="outlined" onClick={handleClickOpen} sx={{color:"inherit",border:"1px solid white"}}>Reservation</Button>
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
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle sx={{textAlign:"center",fontSize:28}}>Reservation</DialogTitle>
              <DialogContent>
                <DialogContentText sx={{textAlign:"center",fontSize:14}}>BOOK YOUR SEATS</DialogContentText>
                <TextField autoFocus margin="dense" id="name" label="Enter Your Name" type="text"  variant="standard" sx={{mx:2}}/>
                <TextField autoFocus margin="dense" id="name" label="Enter Your Email" type="email"  variant="standard" sx={{mx:2}}/>                
                <TextField autoFocus margin="dense" id="name" label="Enter Your PhoneNo." type="number"  variant="standard" sx={{mx:2}}/>                
                <TextField autoFocus margin="dense" id="name" label="Enter No. of Seats" type="text"  variant="standard" sx={{mx:2}}/>                
              </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Book</Button>
            </DialogActions>
          </Dialog>
      </Box>
    </div>
  );
}
export default Navbar;

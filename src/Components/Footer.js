import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import logo from '../Images/logo.png'
import './Styles/Nav.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <>
      <Box sx={{bgcolor: 'midnightblue', position:'relative', bottom: 0, color: 'white',display:'flex',
       p:4,width:'100%',justifyContent:'space-between',
      '@media(max-width:600px)':{flexDirection:'column', alignItems:'center',position:'relative',bottom: 0 }}}>

          <Box sx={{'@media(max-width:600px)':{textAlign:'center',marginBottom: 2}}}>
            <img src={logo} alt="logo" style={{width:80}}/>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis <br />
             magnam molestias adipisci, dignissimos delectus.</Typography>
            <IconButton> 
                <FacebookIcon sx={{color: 'white',marginRight: 2}}/>
                <TwitterIcon sx={{color: 'white',marginRight: 2}}/>
                <InstagramIcon sx={{color: 'white',marginRight: 2}}/>
                <GitHubIcon sx={{color: 'white',marginRight: 2}}/>
            </IconButton>
          </Box>  

          <Box sx={{'@media(max-width:600px)':{textAlign:'center',marginBottom: 2}}}>
            <Typography>OVERVIEW</Typography>
               <Box>
                    <Typography><NavLink className='footer_navlink' to={'/Home'}>Home</NavLink></Typography>
                    <Typography><NavLink className='footer_navlink' to={'/About'}>About</NavLink></Typography> 
                    <Typography><NavLink className='footer_navlink' to={'/Contact'}>Contact</NavLink></Typography> 
                    <Typography><NavLink className='footer_navlink' to={'/Menu'}>Menu</NavLink></Typography> 
                    <Typography><NavLink className='footer_navlink' to={'/Shop'}>Shop</NavLink></Typography> 
               </Box>             
          </Box>  

          <Box sx={{'@media(max-width:600px)':{textAlign:'center',marginBottom: 2}}}>
            <Typography>RESOURCES</Typography>
               <Box>
                    <Typography>Help Center</Typography>
                    <Typography>Types of Use</Typography> 
                    <Typography>Privacy Policy</Typography> 
               </Box>             
          </Box>  

          <Box sx={{'@media(max-width:600px)':{textAlign:'center',marginBottom: 2}}}>
            <Typography>LOCATION</Typography>
               <Box>
                    <Typography>Burari | Delhi</Typography>
                    <Typography>India</Typography> 
                    <Typography>+91-98786789xx</Typography> 
               </Box>             
          </Box>  
          
          </Box>
    </>
  )
}

export default Footer

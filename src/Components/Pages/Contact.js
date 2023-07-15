import React from "react";
import Layout from "../Layout";
import { Box, Button, InputLabel, TextField } from "@mui/material";
import "../Styles/Home.css";

function Contact() {
  return (
    <Layout>
    
      {/*banner2*/}
      <div className="contact_banner1">
        <div className="about_content">
          <h2 className="about_h2">Get in</h2>
          <h1 className="about_h1">Contact Us</h1>
        </div>
      </div>
      {/*banner2 */}

      <Box sx={{display:"flex",m:9,justifyContent:"space-between"}}>

        <Box sx={{mr:4}}>
          <h2>Contact Us</h2>    
          <Box sx={{display:"flex",mt:2,flexWrap:"wrap",justifyContent:"space-between",minHeight:100,}}>
             <Box sx={{mr:4,mb:2,width:180}}>
                <h4>Lunch Time</h4>
                <p>Monday to Sunday</p>
                <p>10.30am - 3:00pm</p>
             </Box>
             <Box sx={{mr:6,mb:2,width:180}}>
                <h4>Dinner Time</h4>
                <p>Monday to Sunday</p>
                <p>10.30am - 3:00pm</p>
             </Box>
             <Box sx={{mr:4}}>
                <h4>Location</h4>
                <p>G.T.B Nagar Burari Delhi-84</p>
                <p>Grand Restaurant</p>
             </Box>
             <Box sx={{mr:4}}>
                <h4>Contact</h4>
                <p>Ph.no 9878678909</p>
                <p>Email grandres@gamil.com</p>
             </Box>
          </Box>

          <Box sx={{mt:4}}>
              <InputLabel htmlFor="component-simple">Name</InputLabel>
              <TextField id="outlined-basic" label="Enter Your Name" variant="outlined" fullWidth sx={{mb:2}}/>
              <InputLabel htmlFor="component-simple">Email</InputLabel>
              <TextField id="outlined-basic" label="Enter Your Email" variant="outlined" fullWidth sx={{mb:2}}/>
              <InputLabel htmlFor="component-simple">Message (Optional)</InputLabel>
              <textarea name="" id="" cols="90" rows="10"></textarea>
              <Button sx={{px:6,py:2,mt:2,background:"brown",color:"white",'&:hover':{color:'black'}}}>Submit</Button>
          </Box>

        </Box>  

        <Box><iframe title="ok" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55972.653767712975!2d77.24073664883642!3d28.74073160769854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1686498191055!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Box>  

      </Box>

    </Layout>
  );
}

export default Contact;

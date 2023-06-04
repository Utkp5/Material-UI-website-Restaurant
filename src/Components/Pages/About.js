import React from "react";
import Layout from "../Layout";
import "../Styles/Home.css";
import { Box, Button, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import h3 from '../../Images/h3.jpg'
import h4 from '../../Images/h4.jpg'




function About() {
  return (
    <Layout>
      {/*banner2*/}
      <div className="about_banner">
        <div className="about_content">
          <h2 className="about_h2">Discover</h2>
          <h1 className="about_h1">ABOUT US</h1>
        </div>
      </div>
      {/*banner2 */}



      {/*visit our*/}
      <Box sx={{ display: "flex",mx: 12,alignItems: "center",mt:10,mb: 10,"@media(max-width:600px)": {display: "flex",flexDirection: "column"}}}>
        <Box sx={{ "@media(max-width:600px)": { mt: 4 } }}>
          <Card sx={{width: 480,minHeight: 400,display: "flex",flexDirection: "column",justifyContent: "space-evenly",color: "black",
              borderRadius: 2,mx: -4,bgcolor: "cornsilk",p: 6,"@media(max-width:600px)": { width: 340, height: 350 }}}>
            <CardContent>
              <Typography sx={{fontSize: 60,fontFamily: "Great Vibes",textAlign: "center"}}color="burlywood">Visit our</Typography>
              <Typography sx={{fontSize: 50,mb: 1.5,textAlign: "center",fontWeight: "bold",mt: -2,"@media(max-width:600px)": { fontSize: 30 }}}>RESTAURANT</Typography>
              <Typography variant="body2" sx={{ textAlign: "center" }}>Gtb nagar Grand restaurant near Burari | Delhi |IND please visit our shop sure will give 50% discount</Typography>
            </CardContent>
            <CardActionArea>
              <Button size="small" sx={{textDecoration: "underline",mx: 12.9,fontSize: 20,color: "burlywood",
                  "@media(max-width:600px)": { mx: 5.4 }}}>Get Location</Button>
            </CardActionArea>
          </Card>
        </Box>
        <Box sx={{"@media(max-width:600px)": {display: "flex",flexDirection: "row",mt: 4,}}}>
          <img src={h3} alt="img1" className="img_h" />
          <img src={h4} alt="img2" className="img_h" />
        </Box>
      </Box>
      {/*visit our*/}



      {/*banner2*/}
      <div className="about_banner1">
        <div className="about_content">
          <Button sx={{px:6,py:2,mb:1,bgcolor:"transparent",border:"2px solid white",color:"white"}}>Make an Online Reservation</Button>
          <h3 className="btn_about_h1">or Call us at +91-99564567xx</h3>
        </div>
      </div>
      {/*banner2 */}



    </Layout>
  );
}

export default About;

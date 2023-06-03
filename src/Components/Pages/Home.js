import React from 'react'
import Layout from '../Layout'
import '../Styles/Home.css';
import { Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import h1 from '../../Images/h1.jpg'
import h2 from '../../Images/h2.jpg'


function Home() {
  return (
    <Layout>
         <div className='h_banner'>
             <div className='h_b_content'>
                <h2 className='hb_h2'>Welcome to</h2>
                <h1 className='hb_h1'>GRAND RESTAURANT</h1>
                 <h3 className='hb_h3'>MAKING THE DELICIOUS PREMIUM FOOD SINCE 2003</h3>
                 <h3 className='hb_h3'>BOOK ONLINE OR CALL +91-9976567898</h3> 
                 <button>ORDER NOW</button>
             </div>
         </div>

         {/*signature*/}
         <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',my: 4}}>
             <Typography sx={{fontSize:35,'@media(max-width:600px)':{fontSize:16}}}>UNTIL I DISCOVERED COOKING I WAS NEVER</Typography>
             <Typography sx={{fontSize:35,'@media(max-width:600px)':{fontSize:16}}}>REALLY INTERESTED IN ANYTHING</Typography>
             <Typography sx={{'@media(max-width:600px)':{fontSize:10}}}>OUR FOUNDER PANDIT UTKARSH</Typography>
             <img className='h_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSore5IdbEohVdtYpgEhItiIIMh2jif5TF2t6RETbfOYnQ35Gon1jezap6-Nb5aEXUBtnc&usqp=CAU" alt="signature" width={350} />
         </Box>
        {/*signature*/}

        {/*our story*/}
        <Box sx={{display:'flex',mx:8,alignItems:'center',mb:10,'@media(max-width:600px)':{display:'flex',flexDirection:'column'}}}>
           <Box sx={{'@media(max-width:600px)':{display:'flex' ,flexDirection:'row'}}}>
              <img src={h1} alt="img1" className='img_h'/>
              <img src={h2} alt="img2" className='img_h'/>
           </Box>
           <Box sx={{'@media(max-width:600px)':{mt:4}}}> 
           <Card sx={{width:480,minHeight:400,bgcolor:'inherit',display:'flex',flexDirection:'column',justifyContent:'space-evenly',
           color:"black",borderRadius: 2,mx:-4,bgcolor:'cornsilk',p:6,
           '@media(max-width:600px)':{width:340,height:350}}}>
                <CardContent>
                  <Typography sx={{ fontSize: 60, fontFamily:'Great Vibes',textAlign:'center' }} color="burlywood">Discover</Typography>
                  <Typography sx={{ fontSize: 60, mb: 1.5,mt:-4,textAlign:'center',fontWeight:'bold',mt:-2,'@media(max-width:600px)':{fontSize:30}}}>OUR STORY</Typography>
                  <Typography variant="body2" sx={{textAlign:'center'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui mollitia quaerat similique unde, ducimus enim ab. Deleniti voluptates molestias illo.</Typography>
                </CardContent>
                <CardActionArea>
                <Button size="small" sx={{textDecoration:"underline",mx:15,fontSize:20,color:"burlywood",
                '@media(max-width:600px)':{mx:5.9}}}>Learn More</Button>
                </CardActionArea>
                </Card>
           </Box>
        </Box>
        {/*our story*/}


        <div className='hp_banner'>
             <div className='hp_content'>
                <h2 className='hp_h2'>Delightful</h2>
                <h1 className='hp_h1'>EXPERIENCE</h1>
             </div>
         </div>
         <Card sx={{ maxWidth: 345, marginTop: 10, marginLeft: 5 }}>

      <CardActionArea>

        <CardMedia component="img" height="200" alt="green iguana"
          image="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">Web Development & design</Typography>
          <Typography variant="body2" color="text.secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quos?</Typography>
        </CardContent>

      </CardActionArea>
      
      <CardActions>
        <Button size="small" color="primary">Share</Button>
        <Button size="small" color="primary" onClick={() => setopen(true)}>Delete</Button>
      </CardActions>
      
      </Card>

    </Layout>
  )
}

export default Home

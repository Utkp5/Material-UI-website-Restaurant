import React from 'react'
import Layout from '../Layout'
import '../Styles/Home.css';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import h1 from '../../Images/h1.jpg'
import h2 from '../../Images/h2.jpg'
import h3 from '../../Images/h3.jpg'
import h4 from '../../Images/h4.jpg'
import h5 from '../../Images/h5.jpg'
import h6 from '../../Images/h6.jpg'
import h7 from '../../Images/h7.jpg'
import h8 from '../../Images/h8.jpg'

import data from '../Data';


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
           <Card sx={{width:480,minHeight:400,display:'flex',flexDirection:'column',justifyContent:'space-evenly',
           color:"black",borderRadius: 2,mx:-4,bgcolor:'cornsilk',p:6,
           '@media(max-width:600px)':{width:340,height:350}}}>
                <CardContent>
                  <Typography sx={{ fontSize: 60, fontFamily:'Great Vibes',textAlign:'center' }} color="burlywood">Discover</Typography>
                  <Typography sx={{ fontSize: 60, mb: 1.5,textAlign:'center',fontWeight:'bold',mt:-2,'@media(max-width:600px)':{fontSize:30}}}>OUR STORY</Typography>
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


        
          {/*banner1*/}
        <div className='hp_banner'>
             <div className='hp_content'>
                <h2 className='hp_h2'>Delightful</h2>
                <h1 className='hp_h1'>EXPERIENCE</h1>
             </div>
         </div>
          {/*banner1*/}



          {/*products*/}
         <Box sx={{display:'flex',flexWrap:'wrap',}}>
         {
           data.map((product) => {
             return (
                  <Card sx={{ maxWidth: 480}}>
                  <CardActionArea>      
                     <CardMedia component="img" height="337.2" alt="product" image={product.img} sx={{'@media(max-width:600px)':{height:1}}}/>
                     <CardContent>
                       <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>{product.d_name}</Typography>
                       <Typography variant="body2" color="text.secondary">{product.d_subName}</Typography>
                       <Typography variant="body2" color="text.secondary">{product.d_price}</Typography>
                     </CardContent>
                  </CardActionArea>
                  </Card>
                )
              })
            }            
          </Box>
          {/*products*/}



          {/*banner2*/}
          <div className='hp_banner1'>
             <div className='hp_content'>
                <h2 className='hp_h2'>Amazing</h2>
                <h1 className='hp_h1'>DELICIOUS</h1>
             </div>
         </div>
         {/*banner2 */}




          {/*check out*/}
          <Box sx={{ width: '80%', mt:10,ml:15,mb:10,display:'flex','@media(max-width:600px)':{ml:3, flexDirection:'column'}}}>
            <Box sx={{'@media(max-width:600px)':{ml:4,}}}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <Grid item xs={8}>
                <CardMedia component="img" height="207" width="310" alt="product" image={h5} sx={{borderRadius:1}}/>
              </Grid>
              <Grid item xs={4}>
                <CardMedia component="img" height="207" width="310" alt="product" image={h6} sx={{borderRadius:1}}/>
              </Grid>
              <Grid item xs={4}>
                <CardMedia component="img" height="207" width="310" alt="product" image={h7} sx={{borderRadius:1}}/>
              </Grid>
              <Grid item xs={8}>
                <CardMedia component="img" height="207" width="310" alt="product" image={h8} sx={{borderRadius:1}}/>
              </Grid>
            </Grid>
            </Box>

            <Box sx={{'@media(max-width:600px)':{mt:4}}}> 
           <Card sx={{width:380,minHeight:400,display:'flex',flexDirection:'column',justifyContent:'space-evenly',
           color:"black",borderRadius: 2,mx:-2,mt:1.5,bgcolor:'cornsilk',p:6,
           '@media(max-width:600px)':{width:340,height:350}}}>
                <CardContent>
                  <Typography sx={{ fontSize: 60, fontFamily:'Great Vibes',textAlign:'center' }} color="burlywood">Check out</Typography>
                  <Typography sx={{ fontSize: 30, mb: 1.5,textAlign:'center',fontWeight:'bold',mt:-2,'@media(max-width:600px)':{fontSize:30}}}>OUR MENU</Typography>
                  <Typography variant="body2" sx={{textAlign:'center'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui mollitia quaerat similique unde, ducimus enim ab. Deleniti voluptates molestias illo.</Typography>
                </CardContent>
                <CardActionArea>
                <Button size="small" sx={{textDecoration:"underline",mx:7.5,fontSize:20,color:"burlywood",
                '@media(max-width:600px)':{mx:5}}}>Get Direction</Button>
                </CardActionArea>
                </Card>
           </Box>
          </Box>
          {/*check out*/}



          {/*visit our*/}
          <Box sx={{display:'flex',mx:12,alignItems:'center',mb:10,'@media(max-width:600px)':{display:'flex',flexDirection:'column'}}}>
            
            <Box sx={{'@media(max-width:600px)':{mt:4}}}> 
                <Card sx={{width:480,minHeight:400,display:'flex',flexDirection:'column',justifyContent:'space-evenly',
                color:"black",borderRadius: 2,mx:-4,bgcolor:'cornsilk',p:6,
                '@media(max-width:600px)':{width:340,height:350}}}>
                  <CardContent>
                    <Typography sx={{ fontSize: 60, fontFamily:'Great Vibes',textAlign:'center' }} color="burlywood">Visit our</Typography>
                    <Typography sx={{ fontSize: 50, mb: 1.5,textAlign:'center',fontWeight:'bold',mt:-2,'@media(max-width:600px)':{fontSize:30}}}>RESTAURANT</Typography>
                    <Typography variant="body2" sx={{textAlign:'center'}}>Gtb nagar Grand restaurant near Burari | Delhi |IND  please visit our shop sure will give 50% discount</Typography>
                  </CardContent>
                  <CardActionArea>
                  <Button size="small" sx={{textDecoration:"underline",mx:12.9,fontSize:20,color:"burlywood",
                  '@media(max-width:600px)':{mx:5.4}}}>Get Location</Button>
                  </CardActionArea>
                  </Card>
            </Box>
            <Box sx={{'@media(max-width:600px)':{display:'flex' ,flexDirection:'row',mt:4}}}>
               <img src={h3} alt="img1" className='img_h'/>
               <img src={h4} alt="img2" className='img_h'/>
            </Box>
          </Box>
     {/*visit our*/}


    </Layout>
  )
}

export default Home

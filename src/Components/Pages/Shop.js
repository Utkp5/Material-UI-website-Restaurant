import React from 'react'
import Layout from '../Layout'
import data from '../Data'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

function Shop() {
  return (
    <Layout>
    
    <box style={{backgroundColor:'lightgrey',display:'flex',justifyContent:'center',alignItems:'center',height:'40vh',fontSize:60,fontWeight:'bold','@media(max-width:600px)':{fontSize:30,height:'20vh'}}}>SHOP</box>

      {/*products*/}
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',mt:10,ml:1,'@media(max-width:600px)':{mt:6,mr:1}}}>
      {
        data.map((product) => {
          return (
               <Card sx={{ maxWidth: 480,mb:6}}>
               <CardActionArea>      
                  <CardMedia component="img" height="337.2" alt="product" image={product.img} sx={{'@media(max-width:600px)':{height:1}}}/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>{product.d_name}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold',fontSize:20}}>{product.d_price}</Typography>
                    <Button sx={{p:1,border:'2px solid brown',mt:1.9,backgroundColor:'brown',color:'white','&:hover':{color:'black'} }}>Add to cart</Button>
                  </CardContent>
               </CardActionArea>
               </Card>
             )
           })
         }            
       </Box>
       {/*products*/}

      
    </Layout>
  )
}

export default Shop

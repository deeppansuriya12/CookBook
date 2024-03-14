import React from 'react'
import Navbar from './Navbar'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Frame from './photos/Frame.png'
import Line from './photos/Line 3.png'
import Hotest_card from './Hotest_card';
import Hottest_card from './hottest_card';
import c_img1 from './photos/card_1.png'
import c_img2 from './photos/card_2.png'
import c_img3 from './photos/card_3.png'
import c_img4 from './photos/card_4.png'
import Join_img from './photos/join_now.png'
import Line_G from './photos/Linegreen.png'
import Cap from './photos/cook_cap.png'
import Nudals from './photos/nudals.png'
import Vector from './photos/Vector.png'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: 'transparent'
}));

const Home = () => {
  return (
    <div>
      <Navbar />
      <Grid container spacing={2}>
        <Grid xs={12} className='background1'>
          <Grid xs={6} sx={{ margin: '220px 100px' }}>
            <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={2}>
              <Item sx={{ color: '#ffff', fontSize: '48px', textShadow: '0px 5px 6px  rgba(0, 0, 0, 0.473)', lineHeight: '65px' }} className='font-Aclonica'>
                WELCOME TO COOKBLOG! FIND OUR BEST RECIPES
              </Item>
              <Item sx={{ color: '#ffff', fontSize: '16px' }} className='font-Poppins'>
                Get inspired by various recipes from my expert experiences. <br />
                From quick healthy meals to family suppers.
              </Item>
              <Item sx={{ color: '#ffff' }} className='Subscribe-btn'>
                Subscribe now
              </Item>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid xs={12} sx={{ marginTop: '100px' }}>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Item sx={{ color: 'black', fontSize: '48px' }} className='font-Abhaya'>
              HOTTEST RECIPES AT FOOD & TASTE
            </Item>
            <Item sx={{ padding: '50px 0px 40px', display: 'flex' }}>
              <li><img src={Line} alt="" className='line' /></li>
              <li><img src={Frame} alt="" /></li>
              <li><img src={Line} alt="" className='line' /></li>
            </Item>
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Item>
              <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
                <Item>
                  <Hotest_card img={c_img1} heading='Pasto Pizza With Extra Toppings' />
                </Item>
                <Item>
                  <Hotest_card img={c_img2} heading='Healthy Strawberry and Banana Shakes' />
                </Item>
              </Stack>
            </Item>
            <Item>
              <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                <Item>
                  <Hottest_card img={c_img3} heading='Hard Chocolate Mix Coffee' />
                </Item>
                <Item>
                  <Hottest_card img={c_img4} heading='Extra Cheesy French Hot Dog' />
                </Item>
              </Stack>
            </Item>
          </Stack>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid xs={12} container alignItems='cemter' sx={{ margin: '100px 0px', padding: '100px 86px' }} justifyContent="flex-start" className='join_part'>
          <Grid xs={5} sx={{ backgroundColor: 'white', margin: '70px 0px', padding: '60px 10px', border: "1px solid black", outline: '10px solid white' }} container direction="column" justifyContent="center" alignItems="center">
            <Item sx={{ fontSize: '32px', padding: '0px 120px', textAlign: 'center' }}>WE LOVE OUR CHEFS JOIN US NOW</Item>
            <Item><img src={Line_G} alt="" /></Item>
            <Item sx={{ padding: '30px 0px' }}><img src={Cap} alt="" /></Item>
            <Item sx={{ fontSize: '16px', padding: '0px 115px', textAlign: 'center' }}>Nam ornare arcu turpis, nec congues with us Curabitur quis euismod mauris. Nulls <br /> eget semper vulputate</Item>
            <Item sx={{ fontSize: '18px', color: 'black', outline: '1px solid black', padding: '5px 8px', marginTop: '30px', borderRadius: '1px', textAlign: 'center', fontWeight: '600' }}>Our Chefs</Item>
          </Grid>
        </Grid>
      </Grid>

      <Box>
        <Grid container spacing={2} sx={{ padding: '0px 84px' }}>
          <Grid xs={6} sx={{ paddingRight: '200px', padding: '60px 0px' }}>
            <Item sx={{ fontSize: '48px', color: 'black', fontWeight: '600', padding: '15px 0px' }} className='font-Abhaya'>We Invite You To The Recipe Program</Item>
            <Item sx={{ color: '#5C5B5B', fontSize: '16px', padding: '40px 0px' }} className='font-Poppins'>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>adipisicing elit. Ea ratione optio nulla illum,</li>
              eius dolor maiores nulla illum,
            </Item>
            <Item>
              <Stack direction='row'>
                <Item direction='row'>
                  <img src={Vector} alt="" />
                </Item>
                <Item sx={{ padding: '0px 30px', color: 'black' }}>
                  <li>Monday-Friday: </li>
                  <li>Saturday-sunday:</li>
                </Item>
                <Item sx={{ color: '#6EBE3B' }}>
                  <li>08:00am - 12pm </li>
                  <li>10:00am - 11pm</li>
                </Item>
              </Stack>
            </Item>
          </Grid>
          <Grid xs={6} justifyContent='flex-end' sx={{ backgroundSize: 'cover' }} className='nudal'></Grid>
        </Grid>
      </Box>

      <Box margin='100px 0px'>
        <Grid container spacing={2} sx={{ padding: '0px 84px' }}>
          <Grid xs={8} className='cake'>
            <Grid xs={6} container direction="column" justifyContent="center" alignItems="center" sx={{ backgroundColor: 'white', margin: '50px' }}>
              <Item>deep</Item>
              <Item>deep</Item>
            </Grid>
          </Grid>
          <Grid xs={4}>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <Button sx={{backgroundColor:'transparent',color:'black',padding:'8px 30px',margin:'10px'}}>One</Button>
              <Button sx={{backgroundColor:'transparent',color:'black',padding:'8px 30px',margin:'10px'}}>Two</Button>
              <Button sx={{backgroundColor:'transparent',color:'black',padding:'8px 30px',margin:'10px'}}>Three</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home
import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';
import Frame from './photos/Frame.png'
import c_img1 from './photos/card_1.png'
import Line from './photos/Linegreen.png'



const Item = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: 'transparent'
}));

const Hotest_card = (props) => {
  return (
    <div>
      <Stack direction="row" justifyContent="space-evenly" textAlign='center' sx={{ width: '630px' }} spacing={2}>
        <Item>
          <img src={props.img} alt="" />
        </Item>
        <Item sx={{ border: '1px solid black', width: '315px', padding: '10px' }}>
          <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2}>
            <Item sx={{ fontSize: '20px', color: "black", fontWeight: '600', textTransform: 'uppercase' }} className='Poppins'>{props.heading}</Item>
            <Item sx={{margin:'0'}}><img src={Line} alt="" /></Item>
            <Item>Lorem Ipsum is simply dummy text of the…</Item>
            <Item sx={{fontSize:'16px',color:'black'}} className='poppins'>Read More</Item>
          </Stack>
        </Item>
      </Stack>
    </div>
  )
}

export default Hotest_card

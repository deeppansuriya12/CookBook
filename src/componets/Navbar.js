import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import Logo from './photos/logo.png'
import PersonIcon from '@mui/icons-material/Person';
import Backgroundimg from './photos/image 1.png'

const Item = styled(Paper)(({ theme }) => ({
    boxShadow: 'none'
}));

const Navbar = () => {
    return (
        <>
            <Box sx={{ padding: '20px 84px' }}>
                <Grid container spacing={2}>
                    <Grid item className='d-flex a-center' xs={2}>
                        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                            <Item ><SearchIcon /></Item>
                        </Stack>
                    </Grid>
                    <Grid item xs={8}>
                        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ margin: '0' }}>
                            <Item className='d-flex header a-center'>
                                <li>HOME</li>
                                <li>PAGES</li>
                                <li>RECIPE DETAIL</li>
                                <li><img src={Logo} alt="" width='50px' /></li>
                                <li>OUR CHEF</li>
                                <li>BLOG</li>
                                <li>CONTACT</li>
                            </Item>
                        </Stack>
                    </Grid>
                    <Grid item xs={2} sx={{ display: 'flex', alignItems: "center", justifyContent: 'end' }}>
                        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
                        <PersonIcon/><Item> LOGIN</Item>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Navbar

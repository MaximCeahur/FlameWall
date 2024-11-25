import React from 'react';

import { AppBar, Toolbar, Box, Link, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';

import NotificationsIcon from '@mui/icons-material/Notifications';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LightModeIcon from '@mui/icons-material/LightMode';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const textStyle = {
    lineHeight: '25px',
    fontSize: '25px',
    fontFamily: '"Pixel", sans serif',
    color: 'azure',
};

export default function NavBar() {
    return (
        <AppBar position='static' sx={{ backgroundColor: 'rgb(16,20,24,0)', padding: '0px', paddingLeft: '270px', boxShadow: 'none', justifyContent: 'center' }}>
            <Toolbar sx={{ display: 'flex', textAlign: 'center', gap: '50px', justifyContent: 'space-between', height: '70px', marginTop: '5px' }}>
                {/* <Box>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: 400, backgroundColor: 'rgb(16,20,24)', border: '1px solid azure' }}
                    >
                        <InputBase
                            sx={{ ml: 2, flex: 1, color: 'azure' }}
                            placeholder="Search information"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px', color: 'rgb(105,113,115)' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Box> */}
                {/* <div style={{ fontSize: '15px', padding: '10px', border: '1px solid azure', borderRadius: 5 }}>
                    Type <span style={{ color: 'green' }}> /site </span> in the server chat to get link to this page
                </div> */}
                <Button sx={{
                    padding: '5px',
                    textTransform: 'none',
                    color: 'azure',
                    minWidth: '50px',
                    minHeight: '50px'
                }}>
                    <MenuIcon sx={{
                        fontSize: '30px'
                    }} />
                </Button>
                <Box style={{ gap: 15 }} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button sx={{
                        padding: '5px',
                        textTransform: 'none',
                        color: 'azure',
                        minWidth: '50px',
                        minHeight: '50px'
                    }}>
                        <BookmarkIcon sx={{
                            fontSize: '30px'
                        }} />
                    </Button>
                    <Button sx={{
                        padding: '5px',
                        textTransform: 'none',
                        color: 'azure',
                        minWidth: '50px',
                        minHeight: '50px'
                    }}>
                        <LightModeIcon sx={{
                            fontSize: '30px'
                        }} />
                    </Button>
                    <Button sx={{
                        padding: '5px',
                        textTransform: 'none',
                        color: 'azure',
                        minWidth: '50px',
                        minHeight: '50px'
                    }}>
                        <PhoneAndroidIcon sx={{
                            fontSize: '30px'
                        }} />
                    </Button>
                    <Button sx={{
                        padding: '5px',
                        textTransform: 'none',
                        color: 'azure',
                        minWidth: '50px',
                        minHeight: '50px'
                    }}>
                        <NotificationsIcon sx={{
                            fontSize: '30px'
                        }} />
                    </Button>
                </Box>
                <Box style={{ gap: 25 }} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Stack direction="row" alignItems={'center'}>
                        <Link href="/signin" style={textStyle} sx={{ textDecoration: 'none', marginRight: "20px" }}>
                            Sign in
                        </Link>
                        <Button style={{
                            backgroundColor: 'azure',
                            padding: '5px',
                            textTransform: 'none',
                            height: '40px'
                        }}>
                            <Link href="/signup" sx={{
                                lineHeight: '25px',
                                fontSize: '25px',
                                fontFamily: '"Pixel", sans serif',
                                color: 'rgb(16, 20, 24)',
                                textDecoration: 'none',
                            }}>
                                Sign up
                            </Link>
                        </Button>

                    </Stack>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

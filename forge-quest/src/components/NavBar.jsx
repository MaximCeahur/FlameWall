import React from 'react';

import { AppBar, Toolbar, Box, Link } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import ListIcon from '@mui/icons-material/List';

const textStyle = {
    color: 'white',
};

export default function NavBar() {

    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgb(16,20,24)' }}
            style={{ height: 70, justifyContent: 'center' }}>
            <Toolbar sx={{ display: 'flex', textAlign: 'center', justifyContent: 'space-between' }} style={{ paddingLeft: 36, paddingRight: 36 }}>
                <Box>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, backgroundColor: 'rgb(16,20,24)', border: '1px solid azure' }}
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
                </Box>
                <Box style={{ gap: 25 }} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Link href="#" style={textStyle} sx={{ textDecoration: 'none' }}>
                            Login
                        </Link>
                    </Box>
                    <Box sx={{ border: '1px solid azure', borderRadius: '5px', p: '5px' }}>
                        <Link href="#" style={textStyle} sx={{ textDecoration: 'none' }}>
                            Register
                        </Link>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

import React from 'react';

import { Box, Button, Link, Typography } from '@mui/material';

import { Divider, Stack } from "@mui/material";

import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GroupIcon from '@mui/icons-material/Group';
import HelpIcon from '@mui/icons-material/Help';
import InventoryIcon from '@mui/icons-material/Inventory';
import Mail from '@mui/icons-material/Mail';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import RuleIcon from '@mui/icons-material/Rule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';
import DiamondIcon from '@mui/icons-material/Diamond';

const textStyle = {
    color: 'azure',
    fontFamily: '"Jersey 10", sans serif'
};

const iconStyle = {
    fontSize: 30,
    color: 'rgb(162,173,190)'
}

const stackStyle = {
    gap: 10,
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5
}

const btnStyle = {
    marginTop: '3px',
    marginBottom: '3px',
    fontSize: 25,
    fontWeight: 400,
    color: 'rgb(162,173,190)',
    textTransform: 'none',
    fontFamily: '"Jersey 10", sans serif',
    height: '40px'
}

export default function LeftSidePanel() {
    return (
        <div className='side-bar' style={{ minWidth: '250px', position: 'fixed', backgroundColor: 'rgb(16, 20, 24)', borderRight: '1px solid rgb(31, 37, 42)'}}>
            <Stack>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '70px', justifyContent: 'center' }}>
                    <Link href="/" style={textStyle} sx={{ textDecoration: 'none', fontSize: 40 }}>
                        CrownPeak
                    </Link>
                </Box>
                <Divider style={{ borderColor: 'rgb(31, 37, 42)', marginBottom: '5px' }}></Divider>
                <Typography style={{ fontSize: '27px', textAlign: 'left', marginTop: '10px', fontFamily: '"Jersey 10", sans serif', color: 'rgb(162,173,190)', marginLeft: '30px' }}>
                    Help
                </Typography>
                <Stack direction={"row"} style={stackStyle}>
                    <PhoneIcon style={iconStyle} />
                    <Button style={btnStyle}>Contacts</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <SupportAgentIcon style={iconStyle} />
                    <Button style={btnStyle}>Support</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <HelpIcon style={iconStyle} />
                    <Button style={btnStyle}>FAQ</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <RuleIcon style={iconStyle} />
                    <Button style={btnStyle}>Rules</Button>
                </Stack>
                <Divider style={{ borderColor: 'rgb(31, 37, 42)', marginTop: '5px', marginBottom: '5px' }}></Divider>
                <Typography style={{ fontSize: '27px', textAlign: 'left', marginTop: '10px', fontFamily: '"Jersey 10", sans serif', color: 'rgb(162,173,190)', marginLeft: '30px' }}>
                    Overview
                </Typography>
                <Stack direction={"row"} style={stackStyle}>
                    <PersonIcon style={iconStyle} />
                    <Button style={btnStyle}>Profile</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <GroupIcon style={iconStyle} />
                    <Button style={btnStyle}>Friends</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <InventoryIcon style={iconStyle} />
                    <Button style={btnStyle}>Inventory</Button>
                </Stack>
                <Divider style={{ borderColor: 'rgb(31, 37, 42)', marginTop: '5px', marginBottom: '5px' }}></Divider>
                <Typography style={{ fontSize: '27px', textAlign: 'left', marginTop: '10px', fontFamily: '"Jersey 10", sans serif', color: 'rgb(162,173,190)', marginLeft: '30px' }}>
                    The rest
                </Typography>
                <Stack direction={"row"} style={stackStyle}>
                    <LocalGroceryStoreIcon style={iconStyle} />
                    <Button style={btnStyle}>Store</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <Mail style={iconStyle} />
                    <Button style={btnStyle}>Mail / News</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <AttachMoneyIcon style={iconStyle} />
                    <Button style={btnStyle} href='/pricings'>Pricings</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <SettingsIcon style={iconStyle} />
                    <Button style={btnStyle}>Settings</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle} sx={{ marginBottom: "10px" }}>
                    <DiamondIcon style={iconStyle} />
                    <Button style={btnStyle}>Hall of Fame</Button>
                </Stack>
            </Stack>
        </div>
    )
}
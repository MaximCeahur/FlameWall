import React from 'react';

import { Button, Link, Typography } from '@mui/material';

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
import DescriptionIcon from '@mui/icons-material/Description';

const textStyle = {
    color: 'azure',
    fontFamily: '"Pixel", sans serif'
};

const iconStyle = {
    fontSize: 30,
    color: 'rgb(162,173,190)'
}

const stackStyle = {
    gap: 10,
    alignContent: 'center',
    alignItems: 'center',
    maxWidth: 230,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
}

const btnStyle = {
    marginTop: '5px',
    marginBottom: '5px',
    fontSize: 35,
    fontWeight: 100,
    height: '40px',
    lineHeight: "normal",
    color: 'rgb(162,173,190)',
    textTransform: 'none',
    letterSpacing: '1px',
    fontFamily: '"Pixel", sans-serif',
}

export default function LeftSidePanel() {
    return (
        <div className='side-bar' style={{ padding: '5px', maxWidth: '260px', minWidth: '260px', position: 'fixed', backgroundColor: 'rgb(16, 20, 24)', borderRight: '1px solid rgb(31, 37, 42)' }}>
            <Stack>
                <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center', height: '70px', justifyContent: 'center', gap: '12px', WebkitTextStroke: '0.7px rgb(162,173,190)', letterSpacing: '2px' }}>
                    <Link href="/" style={textStyle} sx={{ textDecoration: 'none', fontSize: 50 }}>
                        Xenithra
                    </Link>
                </Stack>
                <Divider style={{ borderColor: 'rgb(31, 37, 42)', marginBottom: '5px' }}></Divider>
                <Typography style={{ fontSize: '30px', textAlign: 'left', marginTop: '10px', fontFamily: '"Pixel", sans serif', color: 'rgb(162,173,190)', marginLeft: '30px' }}>
                    Help
                </Typography>
                <Stack direction={"row"} style={stackStyle}>
                    <PhoneIcon style={iconStyle} />
                    <Button style={btnStyle} href='/contacts'>Contacts</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <SupportAgentIcon style={iconStyle} />
                    <Button style={btnStyle} href='/support'>Support</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <HelpIcon style={iconStyle} />
                    <Button style={btnStyle} href='/faq'>FAQ</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <RuleIcon style={iconStyle} />
                    <Button style={btnStyle} href='/rules'>Rules</Button>
                </Stack>
                <Divider style={{ borderColor: 'rgb(31, 37, 42)', marginTop: '5px', marginBottom: '5px' }}></Divider>
                <Typography style={{ fontSize: '30px', textAlign: 'left', marginTop: '10px', fontFamily: '"Pixel", sans serif', color: 'rgb(162,173,190)', marginLeft: '30px' }}>
                    Overview
                </Typography>
                <Stack direction={"row"} style={stackStyle}>
                    <PersonIcon style={iconStyle} />
                    <Button style={btnStyle} href='/profile'>Profile</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <GroupIcon style={iconStyle} />
                    <Button style={btnStyle} href='/friends'>Friends</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <InventoryIcon style={iconStyle} />
                    <Button style={btnStyle}>Inventory</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <DescriptionIcon style={iconStyle} />
                    <Button style={btnStyle}>Description</Button>
                </Stack>
                <Divider style={{ borderColor: 'rgb(31, 37, 42)', marginTop: '5px', marginBottom: '5px' }}></Divider>
                <Typography style={{ fontSize: '30px', textAlign: 'left', marginTop: '10px', fontFamily: '"Pixel", sans serif', color: 'rgb(162,173,190)', marginLeft: '30px' }}>
                    The rest
                </Typography>
                <Stack direction={"row"} style={stackStyle}>
                    <LocalGroceryStoreIcon style={iconStyle} />
                    <Button style={btnStyle}>Store</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <Mail style={iconStyle} />
                    <Button style={btnStyle}>Mail</Button>
                </Stack>
                <Stack direction={"row"} style={stackStyle}>
                    <AttachMoneyIcon style={iconStyle} />
                    <Button style={btnStyle} href='/pricings'> Buy rank</Button>
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
import React from "react";
import { Stack } from "@mui/material";
import Switch from '@mui/material/Switch';

const StackStyle = {
    width: '1100px',
    height: '80px',
    borderRadius: '5px',
    backgroundColor: 'rgb(23,23,23)',
    border: '2px solid #444',
    alignItems: 'center',
    paddingLeft: 15,
    gap: 10
    
}

const pStyle = {
    fontSize: 40,
    margin: 0,
    color: 'azure',
    fontFamily: 'Pixel'
}

const btnStyle = {
    color: 'rgb(23,23,23)',
    fontSize: '20px',
    border: '1px solid #333',
    margin: 20,
    fontWeight: '600'
}

const switchStyles = {
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: 'white',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: 'white',
    },
    '& .MuiSwitch-switchBase': {
      color: 'white',
    },
    '& .MuiSwitch-track': {
      backgroundColor: '#d3d3d3', // Цвет основания
    },
  };


export default function SettingsMP() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1100, margin: "auto", gap: '20px' }}>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 90, margin: 0, marginTop: 30, marginBottom: 30, color: "azure", textAlign: "center" }}>
                    Here are your settings!
                </p>
                <Stack direction={"row"} style={StackStyle}>
                <Switch sx={switchStyles} color="default" />
                <p style={pStyle}>Turn off the ad</p>
                </Stack>
                <Stack direction={"row"} style={StackStyle}>
                <Switch sx={switchStyles} color="default" />
                <p style={pStyle}>Turn off personal messages from other players</p>
                </Stack>
                <Stack direction={"row"} style={StackStyle}>
                <Switch sx={switchStyles} color="default" />
                <p style={pStyle}>Disable tournament announcements in chat </p>
                </Stack>
            </Stack>
        </>
    )
}
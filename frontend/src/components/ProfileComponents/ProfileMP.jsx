import React from "react";
import { Stack, Paper, Button } from "@mui/material";
import ProfilePicture from '../img/pfp.jpg';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import EmailIcon from '@mui/icons-material/Email';
import BarChartIcon from '@mui/icons-material/BarChart';

const boxStyle = {
    width: '250px',
    height: '400px',
    borderRadius: '30px',
    backgroundColor: 'rgb(16, 20, 24)',
    border: '1px solid azure',
}

const pStyle = {
    fontSize: 40,
    margin: 0,
    marginTop: 20,
    color: 'azure',
    textAlign: 'center',
    fontWeight: '650'
}

const btnStyle = {
    color: 'azure',
    fontSize: '20px',
    border: '1px solid white',
    margin: 20,
    fontWeight: '600'
}


export default function ProfileMP() {
    return (
        <>
            <Stack direction={"row"} sx={{ maxWidth: 1200, margin: "auto", marginTop: '40px', gap: "10px", width: "100%", height: "250px" }}>
                <img src={ProfilePicture} style={{ borderRadius: '10px', width: '250px', height: '250px' }}></img>
                <Paper elevation={2} sx={{ backgroundColor: 'rgb(20,24,27)', borderRadius: 2, padding: "20px", width: "100%" }}>
                    <Stack direction={"row"} sx={{ maxWidth: '800px', gap: '40px', alignItems: 'center' }}>

                        <Stack>
                            <p style={{ fontFamily: "Pixel, sans-serif", maxWidth: '100%', color: 'azure', fontSize: 60, margin: 0 }}>Sknery</p>
                            <p style={{ maxWidth: '100%', color: 'rgb(162,173,190)', fontSize: 20, marginBottom: 5 }}>The FlameWall CEO</p>
                            <p style={{ maxWidth: '100%', color: 'rgb(162,173,190)', fontSize: 20, marginBottom: 5 }}>SkneryYT</p>
                            <p style={{ maxWidth: '100%', color: 'rgb(162,173,190)', fontSize: 20, marginBottom: 5 }}>Registered: 2024.09.30</p>
                        </Stack>
                    </Stack>
                </Paper>
                <Stack direction={"column"} gap={"10px"}>
                    <Paper sx={{ backgroundColor: 'rgb(20,24,27)', borderRadius: 2, width: "auto", height: "100%"  }}>
                        <Button sx={{ width: "50px", height: "100%", padding: 0 }}>
                            <PersonAddAltIcon sx={{ color: 'rgb(162,173,190)', height: "30px", width: "30px" }}></PersonAddAltIcon>
                        </Button>
                    </Paper>
                    <Paper sx={{ backgroundColor: 'rgb(20,24,27)', borderRadius: 2, width: "auto", height: "100%"  }}>
                        <Button sx={{ width: "50px", height: "100%", padding: 0 }}>
                            <EmailIcon sx={{ color: 'rgb(162,173,190)', height: "30px", width: "30px" }}></EmailIcon>
                        </Button>
                    </Paper>
                    <Paper sx={{ backgroundColor: 'rgb(20,24,27)', borderRadius: 2, width: "auto", height: "100%" }}>
                        <Button sx={{ width: "50px", height: "100%", padding: 0 }}>
                            <BarChartIcon sx={{ color: 'rgb(162,173,190)', height: "30px", width: "30px" }}></BarChartIcon>
                        </Button>
                    </Paper>
                </Stack>
            </Stack>
        </>
    )
}
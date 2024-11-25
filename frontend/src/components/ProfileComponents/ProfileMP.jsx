import React from "react";
import { Stack, Paper, Button, Typography, Divider } from "@mui/material";
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
        <Stack direction={"column"} sx={{ gap: '15px' }}>
            <Stack direction={"row"} sx={{ maxWidth: 1200, margin: "auto", marginTop: '40px', gap: "15px", width: "100%", height: "250px" }}>
                <img src={ProfilePicture} style={{ borderRadius: '10px', width: '250px', height: '250px' }}></img>
                <Paper elevation={5} sx={{ backgroundColor: 'rgb(23,23,23)', borderRadius: 2, padding: "20px", width: "100%" }}>
                    <Stack direction={"row"} sx={{ maxWidth: '800px', gap: '40px', alignItems: 'center' }}>

                        <Stack>
                            <Stack direction={"row"} sx={{ alignItems: "center", gap: '15px' }}>
                                <p style={{ fontFamily: "Pixel, sans-serif", letterSpacing: '1px', maxWidth: '100%', color: 'azure', fontSize: 60, margin: 0 }}>Sknery</p>
                                <div style={{ height: 40, border: '0.5px solid #333' }}></div>
                                <p style={{ maxWidth: '100%', color: 'rgb(162,173,190)', fontSize: 20 }}>Server owner</p>
                            </Stack>
                            <Stack direction={"row"} sx={{ alignItems: "center", gap: '100px' }}>
                                <p style={{ maxWidth: '100%', color: 'azure', fontSize: 40, lineHeight: '40px', margin: '20px 0 5px 0', fontFamily: "Pixel, sans-serif" }}>MC username: <p style={{ fontSize: 20, fontFamily: "roboto", color: 'rgb(162,173,190)', margin: 0 }}>Skn3ry</p></p>
                                <p style={{ maxWidth: '100%', color: 'azure', fontSize: 40, lineHeight: '40px', margin: '20px 0 5px 0', fontFamily: "Pixel, sans-serif" }}>Registered: <p style={{ fontSize: 20, fontFamily: "roboto", color: 'rgb(162,173,190)', margin: 0 }}>2024.09.30</p></p>
                            </Stack>
                        </Stack>
                    </Stack>
                </Paper>
                <Stack direction={"column"} gap={"15px"}>
                    <Paper elevation={5} sx={{ backgroundColor: 'rgb(23,23,23)', borderRadius: 2, width: "auto", height: "100%" }}>
                        <Button sx={{ width: "50px", height: "100%", padding: 0 }}>
                            <PersonAddAltIcon sx={{ color: 'rgb(162,173,190)', height: "30px", width: "30px" }}></PersonAddAltIcon>
                        </Button>
                    </Paper>
                    <Paper elevation={5} sx={{ backgroundColor: 'rgb(23,23,23)', borderRadius: 2, width: "auto", height: "100%" }}>
                        <Button sx={{ width: "50px", height: "100%", padding: 0 }}>
                            <EmailIcon sx={{ color: 'rgb(162,173,190)', height: "30px", width: "30px" }}></EmailIcon>
                        </Button>
                    </Paper>
                    <Paper elevation={5} sx={{ backgroundColor: 'rgb(23,23,23)', borderRadius: 2, width: "auto", height: "100%" }}>
                        <Button sx={{ width: "50px", height: "100%", padding: 0 }}>
                            <BarChartIcon sx={{ color: 'rgb(162,173,190)', height: "30px", width: "30px" }}></BarChartIcon>
                        </Button>
                    </Paper>
                </Stack>
            </Stack>
            <Stack direction={"row"} sx={{ gap: '15px', width: '100%', justifyContent: 'space-between', marginBottom: '50px' }}>
                <Button sx={{ padding: 0, flexGrow: 1 }}>
                    <Paper elevation={5} sx={{ backgroundColor: 'rgb(23,23,23)', borderRadius: 2, padding: "0 20px 0 22.5px", width: '100%' }}>
                        <Typography style={{ fontFamily: "Pixel, sans-serif", letterSpacing: '1px', maxWidth: '100%', color: 'azure', fontSize: 30, margin: 0 }}>
                            Edit Profile
                        </Typography>
                    </Paper>
                </Button>
                <Button sx={{ padding: 0 }}>
                    <Paper elevation={5} sx={{ backgroundColor: 'rgb(23,23,23)', borderRadius: 2, padding: "0 20px 0 22.5px" }}>
                        <Typography style={{ fontFamily: "Pixel, sans-serif", letterSpacing: '1px', maxWidth: '100%', color: 'azure', fontSize: 30, margin: 0 }}>
                            Profile shop
                        </Typography>
                    </Paper>
                </Button>
                <Button sx={{ padding: 0 }}>
                    <Paper elevation={5} sx={{ backgroundColor: 'rgb(23,23,23)', borderRadius: 2, padding: "0 20px 0 22.5px" }}>
                        <Typography style={{ fontFamily: "Pixel, sans-serif", letterSpacing: '1px', maxWidth: '100%', color: 'azure', fontSize: 30, margin: 0 }}>
                            Close profile
                        </Typography>
                    </Paper>
                </Button>
            </Stack>
            <Paper elevation={5} sx={{ backgroundColor: 'rgb(23, 23, 23)', width: '80%', minHeight: '100px', alignSelf: 'center', marginBottom: '50px', padding: '30px', borderRadius: '20px' }}>
                <Stack direction={"column"}>
                    <Typography style={{ fontFamily: "Pixel, sans-serif", letterSpacing: '1px', maxWidth: '100%', color: 'azure', fontSize: 50, lineHeight: '50px' }}>
                        First post
                    </Typography>
                    <Divider sx={{ margin: '20px 0 20px 0', backgroundColor: '#333' }}></Divider>
                    <Typography style={{ fontFamily: "Pixel, sans-serif", letterSpacing: '1px', maxWidth: '100%', color: 'azure', fontSize: 25, lineHeight: '25px' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Stack>
            </Paper>
        </Stack>
    )
}
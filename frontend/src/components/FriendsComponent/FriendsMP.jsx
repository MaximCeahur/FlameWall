import React from "react";
import { Stack, Paper, Button } from "@mui/material";
import Avatar from '../img/pfp.jpg';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import EmailIcon from '@mui/icons-material/Email';
import BarChartIcon from '@mui/icons-material/BarChart';

const friendsData = [
    {
        name: "First user",
        Date: "2000.01.01",
        avatar: Avatar,
    },
    {
        name: "Second user",
        Date: "2000.01.01",
        avatar: Avatar,
    },
    {
        name: "Third user",
        Date: "2000.01.01",
        avatar: Avatar,
    },
];

export default function FriendsMP() {
    return (
        <>
            <Stack direction={"column"} sx={{ margin: "auto", gap: '30px', width: 1100 }}>
                <p style={{
                    fontFamily: '"Pixel", sans serif', letterSpacing: '3px',
                    WebkitTextStroke: '1px', fontSize: 80, margin: 0, marginTop: 30,
                    color: "azure", textAlign: "center"
                }}>
                    Your friends are here!
                </p>
                <Stack direction={"column"} sx={{ gap: "15px" }}>
                    {friendsData.map((friend, index) => (
                        <Stack key={index} direction={"row"} sx={{ gap: "10px" }}>
                            <img src={friend.avatar} style={{ borderRadius: '5px', width: '80px', height: '80px' }} alt={`${friend.name} avatar`} />
                            <Paper elevation={5} sx={{ padding: "10px", backgroundColor: 'rgb(23,23,23)', height: "60px", width: "100%" }}>
                                <Stack direction={"row"} sx={{ alignContent: "center", height: "60px", justifyContent: "space-between" }}>
                                    <p style={{
                                        fontFamily: '"Pixel", sans serif', fontSize: "40px", margin: 0,
                                        marginLeft: "10px", alignContent: "center", color: "azure", letterSpacing: "1px"
                                    }}>
                                        {friend.name}
                                    </p>
                                    <p style={{
                                        fontSize: "18px", margin: 0, marginLeft: "10px", marginRight: "10px",
                                        alignContent: "center", color: 'rgb(162,173,190)', letterSpacing: "1px"
                                    }}>
                                        {friend.Date}
                                    </p>
                                </Stack>
                            </Paper>
                            <Paper elevation={5} sx={{ backgroundColor: 'rgb(23,23,23)', borderRadius: 2, width: "auto", height: "80px" }}>
                                <Button sx={{ width: "50px", height: "100%", padding: 0 }}>
                                    <PersonAddAltIcon sx={{ color: 'rgb(162,173,190)', height: "30px", width: "30px" }} />
                                </Button>
                            </Paper>
                            <Paper elevation={5} sx={{ backgroundColor: 'rgb(23,23,23)', borderRadius: 2, width: "auto", height: "80px" }}>
                                <Button sx={{ width: "50px", height: "100%", padding: 0 }}>
                                    <EmailIcon sx={{ color: 'rgb(162,173,190)', height: "30px", width: "30px" }} />
                                </Button>
                            </Paper>
                            <Paper elevation={5} sx={{ backgroundColor: 'rgb(23,23,23)', borderRadius: 2, width: "auto", height: "80px" }}>
                                <Button sx={{ width: "50px", height: "100%", padding: 0 }}>
                                    <BarChartIcon sx={{ color: 'rgb(162,173,190)', height: "30px", width: "30px" }} />
                                </Button>
                            </Paper>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </>
    );
}


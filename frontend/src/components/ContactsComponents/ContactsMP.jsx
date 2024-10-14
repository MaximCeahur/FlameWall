import React from "react";
import { Stack, Paper, Button } from "@mui/material";
import Avatar from '../img/pfp.jpg';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import EmailIcon from '@mui/icons-material/Email';
import BarChartIcon from '@mui/icons-material/BarChart';

const contactsData = [
    {
        name: "First contact",
        description: "Description 1",
        avatar: Avatar,
    },
    {
        name: "Second contact",
        description: "Description 2",
        avatar: Avatar,
    },
    {
        name: "Third contact",
        description: "Description 3",
        avatar: Avatar,
    },
];

export default function ContactsMP() {
    return (
        <>
            <Stack direction={"column"} sx={{ margin: "auto", gap: '30px' }}>
                <p style={{
                    fontFamily: '"Pixel", sans serif', letterSpacing: '3px',
                    WebkitTextStroke: '1px', fontSize: 80, margin: 0, marginTop: 30,
                    color: "azure", textAlign: "center"
                }}>
                    Contact us!
                </p>
                <Stack direction={"column"} sx={{ gap: "15px" }}>
                    {contactsData
                .map((contact, index) => (
                        <Stack key={index} direction={"row"} sx={{ gap: "10px" }}>
                            <img src={contact.avatar} style={{ borderRadius: '5px', width: '80px', height: '80px' }} alt={`${contact.name} avatar`} />
                            <Paper elevation={2} sx={{ padding: "10px", backgroundColor: 'rgb(20,24,27)', height: "60px", width: "100%" }}>
                                <Stack direction={"row"} sx={{ gap: "15px", alignContent: "center", height: "60px" }}>
                                    <p style={{
                                        fontFamily: '"Pixel", sans serif', fontSize: "40px", margin: 0,
                                        marginLeft: "10px", alignContent: "center", color: "azure", letterSpacing: "1px"
                                    }}>
                                        {contact.name}
                                    </p>
                                    <p style={{
                                        fontSize: "15px", margin: 0, marginLeft: "10px",
                                        alignContent: "center", color: 'rgb(162,173,190)', letterSpacing: "1px"
                                    }}>
                                        {contact.description}
                                    </p>
                                </Stack>
                            </Paper>
                            <Paper sx={{ backgroundColor: 'rgb(20,24,27)', borderRadius: 2, width: "auto", height: "80px" }}>
                                <Button sx={{ width: "50px", height: "100%", padding: 0 }}>
                                    <PersonAddAltIcon sx={{ color: 'rgb(162,173,190)', height: "30px", width: "30px" }} />
                                </Button>
                            </Paper>
                            <Paper sx={{ backgroundColor: 'rgb(20,24,27)', borderRadius: 2, width: "auto", height: "80px" }}>
                                <Button sx={{ width: "50px", height: "100%", padding: 0 }}>
                                    <EmailIcon sx={{ color: 'rgb(162,173,190)', height: "30px", width: "30px" }} />
                                </Button>
                            </Paper>
                            <Paper sx={{ backgroundColor: 'rgb(20,24,27)', borderRadius: 2, width: "auto", height: "80px" }}>
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


import React from "react";
import { Stack, Paper } from "@mui/material";
import ProfilePicture from '../img/pfp.jpg';

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
            <Stack direction={"column"} sx={{ maxWidth: 1200, margin: "auto", marginTop: '40px' }}>
                <Paper elevation={2} sx={{ backgroundColor: 'rgb(20,24,27)' }}>
                    <Stack direction={"row"} sx={{ maxWidth: '800px', gap: '40px', alignItems: 'center' }}>
                        <img src={ProfilePicture} style={{ borderRadius: '10px', width: '250px', height: '250px' }}></img>
                        <Stack>
                            <p style={{ maxWidth: '100%', color: 'azure', fontSize: 40, margin: 0 }}>N/A</p>
                            <p style={{ maxWidth: '100%', color: 'azure', fontSize: 20, marginBottom: 5 }}>Description: N/A</p>
                            <p style={{ maxWidth: '100%', color: 'azure', fontSize: 20, marginBottom: 5 }}>Real name: N/A</p>
                            <p style={{ maxWidth: '100%', color: 'azure', fontSize: 20, marginBottom: 5 }}>Registered: N/A ago</p>

                        </Stack>
                    </Stack>
                </Paper>
                <p style={{ maxWidth: '100%', color: 'azure', fontSize: 20 }}>You are not logged in, can't read data</p>
            </Stack>
        </>
    )
}
import React from "react";
import { Stack, Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function FAQMP() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1200, margin: "auto", gap: '30px' }}>
                <p style={{ fontFamily: '"Jersey 10", sans serif', letterSpacing: '3px', WebkitTextStroke: '1px', fontSize: 80, margin: 0, marginTop: 30, color: "azure", textAlign: "center" }}>

                </p>
            </Stack>
        </>
    )
}
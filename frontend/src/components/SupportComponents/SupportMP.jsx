import React from "react";
import { Stack, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Hello from '../img/hello.png'

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

const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {

                    backgroundColor: 'rgb(23,23,23)',
                    borderRadius: '4px', 

                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#444', 
                        borderWidth: '2px',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#aaa',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#555',
                        borderWidth: '2px', 
                    },
                    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#444',
                    },
                    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#555',
                    },
                },
                input: {
                    color: 'azure !important', 
                    '&::placeholder': {
                        color: 'azure !important',
                        opacity: '1 !important',
                    },
                },
            },
        },
MuiInputLabel: {
    styleOverrides: {
        root: {
            color: 'azure', 
            '&.Mui-focused': {
                color: 'azure',
            },
            '&.Mui-error': {
                color: 'azure',
            },
            '&.Mui-disabled': {
                color: 'azure',
            },
        },
    },
},
    },
});

export default function SupportMP() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1200, margin: "auto", gap: '30px', alignItems: "center", maxWidth: '1000px' }}>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 80, margin: 0, marginTop: 30, marginBottom: 30, color: "azure", textAlign: "center" }}>
                    Don't be shy to write here!
                </p>
                <Stack direction={"row"} sx={{ gap: '80px', justifyContent: "space-around", width: '100%', alignItems: "center" }}>
                    <Stack sx={{ gap: '30px', width: '100%' }}>
                        <ThemeProvider theme={theme}>
                            <TextField
                                label="Enter your problem"
                                variant="outlined"
                            />
                        </ThemeProvider>
                        <ThemeProvider theme={theme}>
                            <TextField
                                label="Describe your problem (optional)"
                                variant="outlined"
                                multiline
                                rows={7}
                            />
                        </ThemeProvider>
                        <Stack direction={"row"} spacing={2}>
                            <Button variant="contained" sx={{ backgroundColor: '#333' }}>
                                Send mail to the support
                            </Button>
                        </Stack>
                    </Stack>
                    <img src={Hello} style={{ width: '290px', height: '100%' }}></img>
                </Stack>
            </Stack>
        </>
    )
}
import React from "react";
import { Stack, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
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

const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'azure', // белый цвет для границы
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'azure', // белый цвет для границы при наведении
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'azure', // белый цвет для границы при фокусе
                    },
                    '& .MuiOutlinedInput-input': {
                        color: 'azure', // белый цвет для вводимого текста
                    },
                    '&.Mui-focused .MuiOutlinedInput-input': {
                        color: 'azure', // белый цвет для вводимого текста при фокусе
                    },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: 'white', // белый цвет для метки
                },
            },
        },
    },
});

export default function SupportMP() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 400, margin: "auto", gap: '30px', alignContent: 'center' }}>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 80, margin: 0, marginTop: 90, color: "azure", textAlign: "center" }}>
                    Sign In
                </p>
                <ThemeProvider theme={theme}>
                    <TextField
                        label="Username"
                        variant="outlined"
                    />
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                    <TextField
                        label="Password"
                        variant="outlined"
                    />
                </ThemeProvider>
                <Button variant="contained" sx={{ backgroundColor: '#333' }}>
                    Sign In
                </Button>
            </Stack>
        </>
    )
}
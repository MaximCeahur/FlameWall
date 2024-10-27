import React from "react";
import NavBar from "../components/LayoutComponents/NavBar";
import LeftSidePanel from "../components/LayoutComponents/LeftSidePanel";
import { Stack, Box } from "@mui/material";
import MailMP from "../components/MailComponents/MailMP";


export default function Mail() {
    return (
        <Stack direction="row" style={{ justifyContent: 'space-between' }}>
            <LeftSidePanel />
            <Box className="main-box" style={{ width: '100%', padding: '0px'}}>
                <NavBar />
                <div className="main-page">
                    <MailMP />
                </div>
            </Box>
        </Stack>
    )
}
import React from "react";
import NavBar from "../components/LayoutComponents/NavBar";
import LeftSidePanel from "../components/LayoutComponents/LeftSidePanel";
import { Stack, Box } from "@mui/material";
import PricingsMP from "../components/PricingsComponents/PricingsMP";



export default function Landing() {
    return (
        <Stack direction="row" style={{ justifyContent: 'space-between' }}>
            <LeftSidePanel />
            <div className="vertical-divider"></div>
            <Box className="main-box" style={{ width: '100%' }}>
                <NavBar />
                <div className='line'></div>
                <PricingsMP />
            </Box>
        </Stack>
    )
}
import React from "react";
import NavBar from "../components/LayoutComponents/NavBar";
import LeftSidePanel from "../components/LayoutComponents/LeftSidePanel";
import { Stack, Box } from "@mui/material";
import PricingsMP from "../components/PricingsComponents/PricingsMP";



export default function Pricings() {
    return (
        <Stack direction="row" style={{ justifyContent: 'space-between' }}>
            <LeftSidePanel />
            <Box className="main-box" style={{ width: '100%', padding: '0px'}}>
                <NavBar />
                <div className="main-page">
                    <PricingsMP />
                </div>
            </Box>
        </Stack>
    )
}
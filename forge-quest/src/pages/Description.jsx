import React from "react";
import NavBar from "../components/LayoutComponents/NavBar";
import LeftSidePanel from "../components/LayoutComponents/LeftSidePanel";
import { Stack, Box } from "@mui/material";
import DescriptionMP from "../components/DescriptionComponents/DescriptionMP"



export default function Description() {
    return (
        <Stack direction="row" style={{ justifyContent: 'space-between' }}>
            <LeftSidePanel />
            <div className="vertical-divider"></div>
            <Box className="main-box" style={{ width: '100%', padding: '0px'}}>
                <NavBar />
                <div className='line'></div>
                <div className="main-page">
                    <DescriptionMP />
                </div>
            </Box>
        </Stack>
    )
}
import React from "react";
import { Stack } from "@mui/material";
import CrownPeak from '../img/maxresdefault.png';



export default function MainPage() {
    return (
        <Stack direction={"column"} sx={{ maxWidth: 1200, margin: "auto" }}>
            <p style={{ fontFamily: '"Pixel", sans serif', letterSpacing: '1.5px', fontSize: 55, margin: 0, marginTop: 20, color: "azure", textAlign: "center" }}>
                Discover new opportunities with our new server
            </p>
            <div className="vertical-divider"></div>
            <div style={{ width: '100%' }}>
                <img src={CrownPeak} alt="" style={{ width: '100%', marginTop: 30, borderRadius: 20 }} />
            </div>
            <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 35, margin: 0, marginBottom: 90, marginTop: 10, color: "azure", textAlign: "center" }}>
                IP address: mc.flamewall.org
            </p>
        </Stack>
    )
}

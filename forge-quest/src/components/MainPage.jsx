import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Divider, Stack } from "@mui/material";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import Love from './img/love.png';
import CrownPeak from './img/maxresdefault.png';
import Hello from './img/hello.png';



export default function MainPage() {
    return (
        <Stack direction={"row"}>
            <div className="vertical-divider"></div>
            <div style={{ position: 'relative', maxWidth: 1200, margin: 'auto' }}>
                <img src={CrownPeak} alt="" style={{ width: '100%', marginTop: 30, borderRadius: 20 }} />
                <div style={{
                    position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)',
                    textAlign: 'center', color: 'white', width: '100%', backgroundColor: 'rgba(0,0,0,0.5)'
                }}>
                    <p style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 55, textShadow: '4px 4px 8px rgba(0, 0, 0, 2)', margin: 0 }}>Discover new opportunities with our new server</p>
                </div>
            </div>
        </Stack>

    )
}

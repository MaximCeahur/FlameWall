import React from "react";
import { Stack } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';

const textStyle = {
    color: 'azure',
    fontSize: '45px',
    width: '1000px',
    margin: 'auto',
    alignItems: 'center',
    gap: '20px',
    marginBottom: "20px",
    fontFamily: '"Pixel", sans-serif',
}

export default function BedrockPrivilege() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1200, margin: "auto" }}>
                <p style={{ fontFamily: '"Pixel", sans-serif', fontWeight: '400', fontSize: 80, margin: 0, marginTop: 40, marginBottom: 40, color: "azure", textAlign: "center" }}>
                    Bedrock plan priviliges:
                </p>
                <Stack direction={"row"} style={textStyle}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={{ margin: 0, color: "azure" }}>
                        All the privileges from the Diamond plan
                    </span>
                </Stack>
                <Stack direction={"row"} style={textStyle}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={{ margin: 0, color: "azure" }}>
                        You can now moderate our server reports
                    </span>
                </Stack>
                <Stack direction={"row"} style={textStyle}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={{ margin: 0, color: "azure" }}>
                        Ability to follow any player at the server as a spectator
                    </span>
                </Stack>
                <Stack direction={"row"} style={textStyle}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={{ margin: 0, color: "azure" }}>
                        Every your report is priority for us
                    </span>
                </Stack>
                <Stack direction={"row"} style={textStyle}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={{ margin: 0, color: "azure" }}>
                        You immediately go into Hall of Fame in the Sponsor tab
                    </span>
                </Stack>
                <Stack direction={"row"} style={textStyle}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={{ margin: 0, color: "azure" }}>
                        Getting insider information
                    </span>
                </Stack>
                <Stack direction={"row"} style={textStyle}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={{ margin: 0, color: "azure" }}>
                        Bedrock nickname in the chat
                    </span>
                </Stack>
            </Stack>
        </>
    )
}
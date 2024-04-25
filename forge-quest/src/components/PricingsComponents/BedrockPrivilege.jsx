import React from "react";
import { Stack } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';

export default function BedrockPrivilege() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1200, margin: "auto", paddingLeft: '250px' }}>
                <p style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 80, margin: 0, marginTop: 25, marginBottom: 80, color: "azure", textAlign: "center" }}>
                    Bedrock plan priviliges:
                </p>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: 0, color: "azure" }}>
                        All the privileges from the Diamond plan                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: 0, color: "azure" }}>
                        You can now moderate our server reports
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: 0, color: "azure" }}>
                        Ability to follow any player at the server as a spectator
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: 0, color: "azure" }}>
                        Every your report is priority for us
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: 0, color: "azure" }}>
                        You immediately go into Hall of Fame in the Sponsor tab
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: 0, color: "azure" }}>
                        Getting insider information
                    </span>
                </Stack>
            </Stack>
        </>
    )
}
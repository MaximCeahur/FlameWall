import React from "react";
import { Stack } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const textStyle = {
    color: 'azure',
    fontWeight: '1',
    letterSpacing: '2px',
    fontSize: '40px',
    width: '1000px',
    margin: 'auto',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '10px',
    fontFamily: '"Jersey 10", sans-serif',
    WebkitTextStroke: '0.5px azure'
}

export default function SilverPrivilege() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1200, margin: "auto", paddingLeft: '250px' }}>
                <p style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 80, margin: 0, letterSpacing: '3px', WebkitTextStroke: '1px azure', marginTop: 30, marginBottom: 30, color: "azure", textAlign: "center" }}>
                    Silver plan priviliges:
                </p>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={textStyle}>
                        Reserved slot for mini-game lobby (Don't worry, kicked player will get free xp compensation)
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={textStyle}>
                        Possibility to vote for difficulty of the game
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={textStyle}>
                        Participating in monthly cosmetics giveaway
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={textStyle}>
                        Possibility to wear rare and common clothes and use standart emotes and music kits
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '10px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={textStyle}>
                        Silver nickname in the chat
                    </span>
                </Stack>
            </Stack>
        </>
    )
}
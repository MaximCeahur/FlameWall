import React from "react";
import { Stack } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';

const textStyle = {
    color: 'azure',
    fontWeight: '1',
    letterSpacing: '2px',
    fontSize: '40px',
    width: '1000px',
    margin: 'auto',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '5px',
    fontFamily: '"Jersey 10", sans-serif',
    WebkitTextStroke: '0.5px azure'
}

export default function DiamondPrivilege() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1200, margin: "auto" }}>
                <p style={{ fontFamily: '"Jersey 10", sans serif', letterSpacing: '3px', WebkitTextStroke: '1px azure', fontSize: 80, margin: 0, marginTop: 25, marginBottom: 20, color: "azure", textAlign: "center" }}>
                    Diamond plan priviliges:
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
                        Possibility to vote for changing the map
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
                        Possibility to wear legendary, epic, rare and common clothes and use standart, premium and elite emotes/music kits
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={textStyle}>
                        Diamond nickname in the chat
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={textStyle}>
                        Creating private lobbies for mini-games
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={textStyle}>
                        Pets (from common to legendary)
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={textStyle}>
                        You can give 10 different people 1000 free XP in the same match with you
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={textStyle}>
                        Ability to immediately change the mini-game difficulty before start
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                <AddIcon color="primary"></AddIcon>
                    <span style={textStyle}>
                        You can make your own role name in the settings instead of [DIAMOND] 
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                <AddIcon color="primary"></AddIcon>
                    <span style={textStyle}>
                        Possibility to personally promote favourite buildings making them visible for our team
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '10px' }}>
                <AddIcon color="primary"></AddIcon>
                    <span style={textStyle}>
                        Custom capes (HD capes included)
                    </span>
                </Stack>
            </Stack>
        </>
    )
}
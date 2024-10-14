import React from "react";
import { Stack, Button } from "@mui/material";

const boxStyle = {
    width: '250px',
    height: '400px',
    borderRadius: '30px',
    backgroundColor: 'rgb(16, 20, 24)',
    border: '1px solid azure',
}

const pStyle = {
    fontSize: 40,
    margin: 0,
    marginTop: 20,
    color: 'azure',
    textAlign: 'center',
    fontWeight: '650'
}

const btnStyle = {
    color: 'azure',
    fontSize: '20px',
    border: '1px solid white',
    margin: 20,
    fontWeight: '600'
}


export default function RulesMP() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1000, margin: "auto", gap: '10px' }}>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 90, margin: 0, marginTop: 30, color: "azure", textAlign: "center" }}>
                    Respect the rules!
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 35, margin: 0, marginTop: 30, color: "azure", textAlign: "left" }}>
                    - Respect for other players: The main rule is to respect all players on the server. No insults, threats or disrespectful behavior.
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 35, margin: 0, marginTop: 30, color: "azure", textAlign: "left" }}>
                    - Do not use hacked clients or cheats: The use of cheats or modified clients that provide an advantage is prohibited.
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 35, margin: 0, marginTop: 30, color: "azure", textAlign: "left" }}>
                   - Do not build pointless structures in public areas: In public areas, and especially in role-playing areas, it is important to maintain the atmosphere and not create structures that may disrupt the gaming experience of other players.
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 35, margin: 0, marginTop: 30, color: "azure", textAlign: "left" }}>
                   - Respect for Role-Playing Game: If you are playing a role-playing game (RPG), follow your character's personality and respect the storylines and world restrictions.
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 35, margin: 0, marginTop: 30, color: "azure", textAlign: "left" }}>
                   - Compliance with the rules of mini-games: When participating in mini-games, follow the rules of the specific game, do not upset the balance and do not take advantage of out-of-game advantages.
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 35, margin: 0, marginTop: 30, color: "azure", textAlign: "left" }}>
                   - Compliance with the rules of construction in creative mode: In creative mode, you can build almost anything, but do not abuse the rights, do not violate the server rules.
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 35, margin: 0, marginTop: 30, color: "azure", textAlign: "left" }}>
                   - Do not interfere with other players' gameplay: Do not interfere with other players by trying to improve their gaming experience or by disrupting their game without their consent.
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 35, margin: 0, marginTop: 30, color: "azure", textAlign: "left" }}>
                   - Compliance with security rules: It is prohibited to use game or server vulnerabilities to gain unauthorized access or privileges.
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 35, margin: 0, marginTop: 30, color: "azure", textAlign: "left" }}>
                   - Adequate use of chats and communication: Use chats and other forms of communication adequately and within the rules, do not spam, flood or abuse caps.
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 35, margin: 0, marginTop: 30, color: "azure", textAlign: "left" }}>
                   - Mandatory compliance with the instructions of the administration: If necessary, follow the requests of the server administration or moderators without objections, we do not recruit fools there.
                </p>
            </Stack>
        </>
    )
}
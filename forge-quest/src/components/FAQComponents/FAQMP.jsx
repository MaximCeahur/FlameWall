import React from "react";
import { Stack } from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const pStyle = {
    fontFamily: '"Pixel", sans-serif',
    fontSize: 35,
    lineHeight: "normal",
    margin: 0,
    marginTop: 0,
    color: "azure",
    textAlign: "left"
}

export default function FAQMP() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1000, margin: "auto", gap: "15px" }}>
                <p style={{ fontFamily: '"Jersey 10", sans serif', letterSpacing: '3px', WebkitTextStroke: '1px', fontSize: 80, margin: 0, marginBottom: 30, marginTop: 30, color: "azure", textAlign: "center" }}>
                    Here you'll find answers!
                </p>
                <Stack direction={"row"} style={{ alignItems: "left", gap: "20px" }}>
                    <QuestionMarkIcon style={{ fontSize: 30, color: "white" }} />
                    <p style={pStyle}>
                        What versions do you support on your server?
                    </p>
                </Stack>
                <Stack direction={"row"} style={{ alignItems: "left", gap: "20px", marginBottom: 30 }}>
                    <QuestionAnswerIcon style={{ fontSize: 30, color: "white" }} />
                    <p style={pStyle}>
                        Wrong, on OUR server! We support versions 1.8, 1.12 , 1.16 and 1.20
                    </p>
                </Stack>
                <Stack direction={"row"} style={{ alignItems: "left", gap: "20px" }}>
                    <QuestionMarkIcon style={{ fontSize: 30, color: "white" }} />
                    <p style={pStyle}>
                        Why should I play here?
                    </p>
                </Stack>
                <Stack direction={"row"} style={{ alignItems: "left", gap: "20px", marginBottom: 30 }}>
                    <QuestionAnswerIcon style={{ fontSize: 30, color: "white" }} />
                    <p style={pStyle}>
                        You can try here many deleted mini-games and reworked variations of the classic games
                    </p>
                </Stack>
                <Stack direction={"row"} style={{ alignItems: "left", gap: "20px" }}>
                    <QuestionMarkIcon style={{ fontSize: 30, color: "white" }} />
                    <p style={pStyle}>
                        Are the ranks given for a lifetime?
                    </p>
                </Stack>
                <Stack direction={"row"} style={{ alignItems: "left", gap: "20px", marginBottom: 30 }}>
                    <QuestionAnswerIcon style={{ fontSize: 30, color: "white" }} />
                    <p style={pStyle}>
                        Yes. But be careful, as the server finishes the beta-test we can increase prices
                    </p>
                </Stack>
                <Stack direction={"row"} style={{ alignItems: "left", gap: "20px" }}>
                    <QuestionMarkIcon style={{ fontSize: 30, color: "white" }} />
                    <p style={pStyle}>
                        Why should I play on the unfinished server?
                    </p>
                </Stack>
                <Stack direction={"row"} style={{ alignItems: "left", gap: "20px", marginBottom: 30 }}>
                    <QuestionAnswerIcon style={{ fontSize: 30, color: "white" }} />
                    <p style={pStyle}>
                        If you play at least 100 hours before the 1st of October you gain the [BETA] Prefix near your nickname
                    </p>
                </Stack>
                <Stack direction={"row"} style={{ alignItems: "left", gap: "20px" }}>
                    <QuestionMarkIcon style={{ fontSize: 30, color: "white" }} />
                    <p style={pStyle}>
                        Can I make money here?
                    </p>
                </Stack>
                <Stack direction={"row"} style={{ alignItems: "left", gap: "20px", marginBottom: 30 }}>
                    <QuestionAnswerIcon style={{ fontSize: 30, color: "white" }} />
                    <p style={pStyle}>
                        Yes, you can participate in the three-month tournaments. The tournaments are for every single mini-game. The prize pool is different depending on popularity of it.
                        We are trying to help every mini-game to find it's own player.
                    </p>
                </Stack>
                <Stack direction={"row"} style={{ alignItems: "left", gap: "20px" }}>
                    <QuestionMarkIcon style={{ fontSize: 30, color: "white" }} />
                    <p style={pStyle}>
                        How does the prize fund work?
                    </p>
                </Stack>
                <Stack direction={"row"} style={{ alignItems: "left", gap: "20px", marginBottom: 30 }}>
                    <QuestionAnswerIcon style={{ fontSize: 30, color: "white" }} />
                    <p style={pStyle}>
                        The money is fairly distributed among the top twenty players of the season based on the number of wins.
                    </p>
                </Stack>
                <Stack direction={"row"} style={{ alignItems: "left", gap: "20px" }}>
                    <QuestionMarkIcon style={{ fontSize: 30, color: "white" }} />
                    <p style={pStyle}>
                        How can I submit my map for your server?
                    </p>
                </Stack>
                <Stack direction={"row"} style={{ alignItems: "left", gap: "20px", marginBottom: 30 }}>
                    <QuestionAnswerIcon style={{ fontSize: 30, color: "white" }} />
                    <p style={pStyle}>
                        You can write to one of our moderators. Send him an archive with your world and wait for a response.
                    </p>
                </Stack>

            </Stack>
        </>
    )
}
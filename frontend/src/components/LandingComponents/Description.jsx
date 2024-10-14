import React from "react";
import { Stack, Typography } from "@mui/material";
import Hello from '../img/hello.png'
import Love from '../img/love.png'
import Fight from '../img/fight.png'
import Build from '../img/build.png'
import Survive from '../img/survive.png'

const pStyle = {
    fontSize: 40,
    fontFamily: '"Pixel", sans serif',
    color: "azure",
    lineHeight: "normal"
}

const H1style = {
    fontFamily: '"Pixel", sans serif',
    fontSize: 100,
    margin: 0,
    marginBottom: 40,
    color: "azure",
    textAlign: "center",
}

const H2style = {
    fontSize: 80,
    lineHeight: "60px",
    fontFamily: '"Pixel", sans serif',
    color: "azure"
}

export default function Description() {
    return (
        <>
            <Stack sx={{ color: "azure", marginBottom: "150px" }}>
                <Typography style={H1style}>
                    What is this?
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"30px"}>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"50px"}>
                        <Typography style={H2style}>
                            Welcome to our server!
                        </Typography>
                        <Typography style={pStyle} >
                            We are developing the new project to unite the best of every server that has ever been in this game
                        </Typography>
                    </Stack>
                    <img src={Hello} style={{ width: '290px', height: '100%' }}></img>
                </Stack>
            </Stack>
            <Stack sx={{ maxWidth: 1200, margin: "auto", color: "azure", marginBottom: "150px" }}>
                <Typography style={H1style}>
                    Why us?
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"90px"}>
                    <img src={Love} style={{ width: '300px', height: '100%' }}></img>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"50px"}>
                        <Typography style={H2style}>
                            From players for players!
                        </Typography>
                        <Typography style={pStyle}>
                            Everyone of our team knows that players want to play on the server with no lags and we provide the best preformance in the world
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx={{ maxWidth: 1200, margin: "auto", color: "azure", marginBottom: "150px" }}>
                <Typography style={H1style}>
                    Mini-games
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"20px"}>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"50px"}>
                        <Typography style={H2style}>
                            Fight in mini-games for ELO
                        </Typography>
                        <Typography style={pStyle}>
                            Mathematically accurate rating system allows you to avoid unfair assessment of skills as much as possible with best Anti-Cheat system in the world
                        </Typography>
                    </Stack>
                    <img src={Fight} style={{ width: '450px', height: '100%' }}></img>
                </Stack>
            </Stack>
            <Stack sx={{ maxWidth: 1200, margin: "auto", color: "azure", marginBottom: "150px" }}>
                <Typography style={H1style}>
                    Building
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"100px"}>
                    <img src={Build} style={{ width: '330px', height: '100%' }}></img>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"50px"}>
                        <Typography style={H2style}>
                            Build woulderful things!
                        </Typography>
                        <Typography style={pStyle}>
                            Everyone on this server can help our community by buildng spawns or maps for our mini-games. You can earn free privileges if your map is being added here
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx={{ maxWidth: 1200, margin: "auto", color: "azure", marginBottom: "80px", }}>
                <Typography style={H1style}>
                    Survival
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"50px"}>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"50px"}>
                        <Typography style={H2style}>
                            Survive with your friends
                        </Typography>
                        <Typography style={pStyle}>
                            You can survive here for free instead of paying for hosting. You can find here new people and with privilege you can create your own mod pack
                        </Typography>
                    </Stack>
                    <img src={Survive} style={{ width: '550px', height: '100%' }}></img>
                </Stack>
            </Stack>
        </>
    )
}

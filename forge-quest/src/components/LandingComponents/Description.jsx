import React from "react";
import { Stack, Typography } from "@mui/material";
import Hello from '../img/hello.png'
import Love from '../img/love.png'
import Fight from '../img/fight.png'
import Build from '../img/build.png'
import Survive from '../img/survive.png'

export default function Description() {
    return (
        <>
            <Stack sx={{ maxWidth: 1200, margin: "auto", paddingLeft: '250px', color: "azure", marginBottom: "150px" }}>
                <Typography style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 100, margin: 0, color: "azure", textAlign: "center" }}>
                    What is this?
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"90px"}>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"30px"}>
                        <Typography fontSize={"80px"} lineHeight={"70px"} fontFamily={'"Jersey 10", sans serif'}>
                            Welcome to our server!
                        </Typography>
                        <Typography fontSize={"30px"} lineHeight={"35px"} fontFamily={'"Jersey 10", sans serif'} >
                            We are developing the new project to unite the best of every server that has ever been in this game
                        </Typography>
                    </Stack>
                    <img src={Hello} style={{ width: '300px', height: '100%' }}></img>
                </Stack>
            </Stack>
            <Stack sx={{ maxWidth: 1200, margin: "auto", paddingLeft: '250px', color: "azure", marginBottom: "150px" }}>
                <Typography style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 100, margin: 0, color: "azure", textAlign: "center" }}>
                    Why us?
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"90px"}>
                    <img src={Love} style={{ width: '300px', height: '100%' }}></img>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"30px"}>
                        <Typography fontSize={"80px"} lineHeight={"70px"} fontFamily={'"Jersey 10", sans serif'}>
                            From players for players!
                        </Typography>
                        <Typography fontSize={"30px"} lineHeight={"35px"} fontFamily={'"Jersey 10", sans serif'} >
                            Everyone of our team knows that players want to play on the server with no lags and we provide the best preformance in the world
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx={{ maxWidth: 1200, margin: "auto", paddingLeft: '250px', color: "azure", marginBottom: "150px" }}>
                <Typography style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 100, margin: 0, color: "azure", textAlign: "center" }}>
                    Mini-games
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"20px"}>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"30px"}>
                        <Typography fontSize={"80px"} lineHeight={"70px"} fontFamily={'"Jersey 10", sans serif'}>
                            Fight in mini-games for ELO
                        </Typography>
                        <Typography fontSize={"30px"} lineHeight={"35px"} fontFamily={'"Jersey 10", sans serif'} >
                            Mathematically accurate rating system allows you to avoid unfair assessment of skills as much as possible with best Anti-Cheat system in the world
                        </Typography>
                    </Stack>
                    <img src={Fight} style={{ width: '500px', height: '100%' }}></img>
                </Stack>
            </Stack>
            <Stack sx={{ maxWidth: 1200, margin: "auto", paddingLeft: '250px', color: "azure", marginBottom: "150px" }}>
                <Typography style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 100, margin: 0, color: "azure", textAlign: "center" }}>
                    Building
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"90px"}>
                    <img src={Build} style={{ width: '400px', height: '100%' }}></img>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"30px"}>
                        <Typography fontSize={"80px"} lineHeight={"70px"} fontFamily={'"Jersey 10", sans serif'}>
                            Build woulderful things!
                        </Typography>
                        <Typography fontSize={"30px"} lineHeight={"35px"} fontFamily={'"Jersey 10", sans serif'} >
                            Everyone on this server can help our community by buildng spawns or maps for our mini-games. You can earn free privileges if your map is being added here
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx={{ maxWidth: 1200, margin: "auto", paddingLeft: '250px', color: "azure", marginBottom: "80px" }}>
                <Typography style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 100, margin: 0, color: "azure", textAlign: "center" }}>
                    Survival                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"30px"}>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"30px"}>
                        <Typography fontSize={"80px"} lineHeight={"70px"} fontFamily={'"Jersey 10", sans serif'}>
                            Survive with your friends                        </Typography>
                        <Typography fontSize={"30px"} lineHeight={"35px"} fontFamily={'"Jersey 10", sans serif'} >
                            You can survive here for free instead of paying for hosting. You can find here new people and with privilege you can create your own mod pack                       </Typography>
                    </Stack>
                    <img src={Survive} style={{ width: '500px', height: '100%' }}></img>
                </Stack>
            </Stack>
        </>
    )
}

import React from "react";
import { Stack, Typography } from "@mui/material";
import Hello from '../img/hello.png'
import Love from '../img/love.png'
import Fight from '../img/fight.png'
import Build from '../img/build.png'
import Survive from '../img/survive.png'

const pStyle = {
    
}

export default function Description() {
    return (
        <>
            <Stack sx={{ color: "azure", marginBottom: "150px" }}>
                <Typography style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 100, margin: 0, color: "azure", textAlign: "center", WebkitTextStroke: '1px azure', letterSpacing: '4px'  }}>
                    What is this?
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"90px"}>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"30px"}>
                        <Typography fontSize={"70px"} lineHeight={"60px"} fontFamily={'"Jersey 10", sans serif'} letterSpacing={"1.5px"} style={{ WebkitTextStroke: '1px azure' }}>
                            Welcome to our server!
                        </Typography>
                        <Typography fontSize={"30px"} lineHeight={"35px"} fontFamily={'"Jersey 25", sans serif'} letterSpacing={"1.5px"} style={{ WebkitTextStroke: '0.3px azure' }}>
                            We are developing the new project to unite the best of every server that has ever been in this game
                        </Typography>
                    </Stack>
                    <img src={Hello} style={{ width: '300px', height: '100%' }}></img>
                </Stack>
            </Stack>
            <Stack sx={{ maxWidth: 1200, margin: "auto", color: "azure", marginBottom: "150px" }}>
                <Typography style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 100, margin: 0, color: "azure", textAlign: "center", WebkitTextStroke: '1px azure', letterSpacing: '4px'  }}>
                    Why us?
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"90px"}>
                    <img src={Love} style={{ width: '380px', height: '100%' }}></img>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"30px"}>
                        <Typography fontSize={"70px"} lineHeight={"60px"} fontFamily={'"Jersey 10", sans serif'} letterSpacing={"1.5px"} style={{ WebkitTextStroke: '1px azure' }}>
                            From players for players!
                        </Typography>
                        <Typography fontSize={"30px"} lineHeight={"35px"} fontFamily={'"Jersey 25", sans serif'} letterSpacing={"1.5px"} style={{ WebkitTextStroke: '0.3px azure' }}>
                            Everyone of our team knows that players want to play on the server with no lags and we provide the best preformance in the world
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx={{ maxWidth: 1200, margin: "auto", color: "azure", marginBottom: "150px" }}>
                <Typography style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 100, margin: 0, color: "azure", textAlign: "center", WebkitTextStroke: '2px azure', letterSpacing: '4px' }}>
                    Mini-games
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"20px"}>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"30px"}>
                        <Typography fontSize={"70px"} lineHeight={"60px"} fontFamily={'"Jersey 10", sans serif'} letterSpacing={"1.5px"} style={{ WebkitTextStroke: '1px azure' }}>
                            Fight in mini-games for ELO
                        </Typography>
                        <Typography fontSize={"30px"} lineHeight={"35px"} fontFamily={'"Jersey 25", sans serif'} letterSpacing={"1.5px"} style={{ WebkitTextStroke: '0.3px azure' }}>
                            Mathematically accurate rating system allows you to avoid unfair assessment of skills as much as possible with best Anti-Cheat system in the world
                        </Typography>
                    </Stack>
                    <img src={Fight} style={{ width: '500px', height: '100%' }}></img>
                </Stack>
            </Stack>
            <Stack sx={{ maxWidth: 1200, margin: "auto", color: "azure", marginBottom: "150px" }}>
                <Typography style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 100, margin: 0, color: "azure", textAlign: "center", WebkitTextStroke: '2px azure', letterSpacing: '4px' }}>
                    Building
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"90px"}>
                    <img src={Build} style={{ width: '500px', height: '100%' }}></img>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"30px"}>
                        <Typography fontSize={"70px"} lineHeight={"60px"} fontFamily={'"Jersey 10", sans-serif'} letterSpacing={"1.5px"} style={{ WebkitTextStroke: '1px azure' }}>
                            Build woulderful things!
                        </Typography>
                        <Typography fontSize={"30px"} lineHeight={"35px"} fontFamily={'"Jersey 25", sans-serif'} letterSpacing={"1.5px"} style={{ WebkitTextStroke: '0.3px azure' }}>
                            Everyone on this server can help our community by buildng spawns or maps for our mini-games. You can earn free privileges if your map is being added here
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx={{ maxWidth: 1200, margin: "auto", color: "azure", marginBottom: "80px", }}>
                <Typography style={{ fontFamily: '"Jersey 25", sans serif', fontSize: 100, margin: 0, marginBottom: '30px', color: "azure", textAlign: "center", WebkitTextStroke: '1px azure', letterSpacing: '4px' }}>
                    Survival
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} gap={"0px"}>
                    <Stack direction={"column"} justifyContent={"center"} width={"500px"} gap={"30px"}>
                        <Typography fontSize={"70px"} lineHeight={"60px"} fontFamily={'"Jersey 10", sans-serif'} letterSpacing={"1.5px"} style={{ WebkitTextStroke: '1px azure' }}>
                            Survive with your friends                        </Typography>
                        <Typography fontSize={"30px"} lineHeight={"35px"} fontFamily={'"Jersey 25", sans-serif'} letterSpacing={"1.5px"} style={{ WebkitTextStroke: '1px azure' }}>
                            You can survive here for free instead of paying for hosting. You can find here new people and with privilege you can create your own mod pack
                        </Typography>
                    </Stack>
                    <img src={Survive} style={{ width: '550px', height: '100%' }}></img>
                </Stack>
            </Stack>
        </>
    )
}

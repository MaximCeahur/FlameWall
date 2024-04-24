import React from "react";
import { Stack, Typography } from "@mui/material";
import Hello from './img/hello.png'
import Love from './img/love.png'

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
        </>
    )
}

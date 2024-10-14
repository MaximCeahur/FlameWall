import React from "react";
import { Button, Stack } from "@mui/material";
import Coins from "../img/coin.png"


const boxStyle = {
    width: '250px',
    height: '400px',
    borderRadius: '30px',
    backgroundColor: 'rgb(16, 20, 24)',
    border: '1px solid azure',
    fontFamily: '"Pixel", sans serif',
    justifyContent: 'space-evenly'
}

const pStyle = {
    fontSize: 45,
    margin: 0,
    marginTop: 20,
    color: 'azure',
    textAlign: 'center',
    fontFamily: '"Pixel", sans serif'
}

const btnStyle = {
    color: 'azure',
    fontSize: '20px',
    border: '1px solid white',
    margin: 20,
    fontWeight: '600'
}

export default function StoreMP() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1200, margin: "auto" }}>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 80, margin: 0, marginTop: 30, color: "azure", textAlign: "center" }}>
                    You can buy coins here!
                </p>
                <div style={{ width: '100%', marginTop: '35px' }}>
                    <Stack direction={"row"} justifyContent={"space-around"} gap={"10px"}>
                        <Stack style={boxStyle} alignItems={"center"} direction={"column"}>
                            <p style={pStyle}>
                                x500 coins
                            </p>
                            <p style={{ textAlign: 'center', color: 'azure', fontSize: '30px', margin: 0, marginTop: '10px' }}>
                                $1 ($5 after Beta)
                            </p>
                            <Button style={btnStyle} href="/pricings/silver">
                                Click to buy
                            </Button>
                            <img src={Coins} style={{ padding: '15px', width: '130px' }}></img>
                        </Stack>
                        <Stack style={boxStyle} alignItems={"center"} direction={"column"}>
                            <p style={pStyle}>
                                x2000 coins
                            </p>
                            <p style={{ textAlign: 'center', color: 'azure', fontSize: '30px', margin: 0, marginTop: '10px' }}>
                                $3 ($15 after Beta)
                            </p>
                            <Button style={btnStyle} href="/pricings/gold">
                                Click to buy
                            </Button>
                            <img src={Coins} style={{ padding: '15px', width: '130px' }}></img>

                        </Stack>
                        <Stack style={boxStyle} alignItems={"center"} direction={"column"}>
                            <p style={pStyle}>
                                x5000 coins
                            </p>
                            <p style={{ textAlign: 'center', color: 'azure', fontSize: '30px', margin: 0, marginTop: '10px' }}>
                                $6 ($30 after Beta)
                            </p>
                            <Button style={btnStyle} href="/pricings/diamond">
                                Click to buy
                            </Button>
                            <img src={Coins} style={{ padding: '15px', width: '130px' }}></img>

                        </Stack>
                        <Stack style={boxStyle} alignItems={"center"} direction={"column"}>
                            <p style={pStyle}>
                                x20000
                            </p>
                            <p style={{ textAlign: 'center', color: 'azure', fontSize: '30px', margin: 0, marginTop: '10px' }}>
                                $12 ($60 after Beta)
                            </p>
                            <Button style={btnStyle} href="/pricings/bedrock">
                                Click to buy
                            </Button>
                            <img src={Coins} style={{ width: '130px', padding: '15px' }}></img>
                        </Stack>
                    </Stack>
                </div>
            </Stack>
        </>
    )
}
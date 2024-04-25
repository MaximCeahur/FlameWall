import React from "react";
import { Button, Stack } from "@mui/material";
import Silver from '../img/silver.webp';
import Gold from '../img/gold.webp';
import Diamond from '../img/diamond.webp';
import Bedrock from '../img/bedrock.webp';


const boxStyle = {
    width: '250px',
    height: '400px',
    borderRadius: '30px',
    backgroundColor: 'rgb(16, 20, 24)',
    border: '1px solid azure',
}

const pStyle = {
    fontFamily: '"Jersey 10", sans serif',
    fontSize: 50,
    margin: 0,
    marginTop: 20,
    color: 'azure',
    textAlign: 'center'
}

const btnStyle = {
    color: 'azure',
    fontSize: '20px',
    border: '1px solid white',
    margin: 20
}

export default function PricingsMP() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1200, margin: "auto", paddingLeft: '250px' }}>
                <p style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 80, margin: 0, marginTop: 30, color: "azure", textAlign: "center" }}>
                    Support us with your donations :D
                </p>
                <div style={{ width: '100%', marginTop: '35px' }}>
                    <Stack direction={"row"} justifyContent={"space-around"}>
                        <Stack style={boxStyle} alignItems={"center"} direction={"column"}>
                            <p style={pStyle}>
                                Silver
                            </p>
                            <p style={{textAlign: 'center', color: 'azure', fontSize: '25px', margin: 0, marginTop: '10px'}}>
                                $5/month
                            </p>
                            <Button style={btnStyle} href="/pricings/silver">
                                Click here to see
                            </Button>
                            <img src={Silver} style={{ padding: '15px' }}></img>
                        </Stack>
                        <Stack style={boxStyle} alignItems={"center"} direction={"column"}>
                        <p style={pStyle}>
                                Gold
                            </p>
                            <p style={{textAlign: 'center', color: 'azure', fontSize: '25px', margin: 0, marginTop: '10px'}}>
                                $19/month
                            </p>
                            <Button style={btnStyle} href="/pricings/gold">
                                Click here to see
                            </Button>
                            <img src={Gold} style={{ padding: '15px' }}></img>

                        </Stack>
                        <Stack style={boxStyle} alignItems={"center"} direction={"column"}>
                            <p style={pStyle}>
                                Diamond
                            </p>
                            <p style={{textAlign: 'center', color: 'azure', fontSize: '25px', margin: 0, marginTop: '10px'}}>
                                $49/month
                            </p>
                            <Button style={btnStyle}>
                                Click here to see
                            </Button>
                            <img src={Diamond} style={{ padding: '15px' }}></img>

                        </Stack>
                        <Stack style={boxStyle} alignItems={"center"} direction={"column"}>
                            <p style={pStyle}>
                                Bedrock
                            </p>
                            <p style={{textAlign: 'center', color: 'azure', fontSize: '25px', margin: 0, marginTop: '10px'}}>
                                $199/month
                            </p>
                            <Button style={btnStyle}>
                                Click here to see
                            </Button>
                            <img src={Bedrock} style={{ width: '160px', padding: '15px' }}></img>
                        </Stack>
                    </Stack>
                </div>
                <p style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: '0px', marginTop: 30, color: "azure", textAlign: "center" }}>
                    From $1000 you become member of our team as a sponsor and you will playe key role in development
                </p>
            </Stack>
        </>
    )
}
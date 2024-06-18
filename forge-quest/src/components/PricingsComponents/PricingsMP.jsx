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

export default function PricingsMP() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1200, margin: "auto" }}>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 80, margin: 0, marginTop: 30, color: "azure", textAlign: "center" }}>
                    Support us with your donations :D
                </p>
                <div style={{ width: '100%', marginTop: '35px' }}>
                    <Stack direction={"row"} justifyContent={"space-around"} gap={"10px"}>
                        <Stack style={boxStyle} alignItems={"center"} direction={"column"}>
                            <p style={pStyle}>
                                Silver
                            </p>
                            <p style={{textAlign: 'center', color: 'azure', fontSize: '30px', margin: 0, marginTop: '10px'}}>
                                $2 ($5 after Beta)
                            </p>
                            <Button style={btnStyle} href="/pricings/silver">
                                Click here to see
                            </Button>
                            <img src={Silver} style={{ padding: '15px', width: '130px'  }}></img>
                        </Stack>
                        <Stack style={boxStyle} alignItems={"center"} direction={"column"}>
                        <p style={pStyle}>
                                Gold
                            </p>
                            <p style={{textAlign: 'center', color: 'azure', fontSize: '30px', margin: 0, marginTop: '10px'}}>
                                $7 ($19 after Beta)
                            </p>
                            <Button style={btnStyle} href="/pricings/gold">
                                Click here to see
                            </Button>
                            <img src={Gold} style={{ padding: '15px', width: '130px'  }}></img>

                        </Stack>
                        <Stack style={boxStyle} alignItems={"center"} direction={"column"}>
                            <p style={pStyle}>
                                Diamond
                            </p>
                            <p style={{textAlign: 'center', color: 'azure', fontSize: '30px', margin: 0, marginTop: '10px'}}>
                                $15 ($49 after Beta)
                            </p>
                            <Button style={btnStyle} href="/pricings/diamond">
                                Click here to see
                            </Button>
                            <img src={Diamond} style={{ padding: '15px', width: '130px' }}></img>

                        </Stack>
                        <Stack style={boxStyle} alignItems={"center"} direction={"column"}>
                            <p style={pStyle}>
                                Bedrock
                            </p>
                            <p style={{textAlign: 'center', color: 'azure', fontSize: '30px', margin: 0, marginTop: '10px'}}>
                                $50 ($199 after Beta)
                            </p>
                            <Button style={btnStyle} href="/pricings/bedrock">
                                Click here to see
                            </Button>
                            <img src={Bedrock} style={{ width: '130px', padding: '15px' }}></img>
                        </Stack>
                    </Stack>
                </div>
                <p style={{ fontSize: 30, margin: '0px', marginTop: 30, color: "azure", textAlign: "center", fontFamily: '"Pixel", sans-serif' }}>
                    From $1000 donation you become member of our team as a sponsor and you will play the key role in development
                </p>
            </Stack>
        </>
    )
}
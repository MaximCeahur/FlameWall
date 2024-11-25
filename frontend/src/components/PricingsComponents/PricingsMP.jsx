import React from "react";
import { Button, Paper, Stack } from "@mui/material";
import Silver from '../img/silver.webp';
import Gold from '../img/gold.webp';
import Diamond from '../img/diamond.webp';
import Bedrock from '../img/bedrock.webp';


const boxStyle = {
    width: '250px',
    height: '400px',
    borderRadius: '30px',
    backgroundColor: 'rgb(23,23,23)',
    fontFamily: '"Pixel", sans serif',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    border: '2px solid #444'
}

const pStyle = {
    fontSize: 60,
    margin: 0,
    marginTop: 20,
    color: 'azure',
    textAlign: 'center',
    fontFamily: '"Pixel", sans serif'
}

const btnStyle = {
    color: 'azure',
    fontSize: '20px',
    margin: '20px 20px 0 20px',
    fontWeight: '600'
}

export default function PricingsMP() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1200, margin: "auto" }}>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 80, margin: 0, marginTop: 30, color: "azure", textAlign: "center" }}>
                    Support us with bying a rank :D
                </p>
                <div style={{ width: '100%', marginTop: '35px' }}>
                    <Stack direction={"row"} justifyContent={"space-around"} gap={"10px"}>
                        <Paper style={boxStyle} alignItems={"center"} direction={"column"}>
                            <div style={{ marginBottom: '20px', height: '10px', width: '60%', backgroundColor: 'rgb(216,216,216)', borderBottomLeftRadius: '3px', borderBottomRightRadius: '3px' }}></div>
                            <p style={pStyle}>
                                Silver
                            </p>
                            <p style={{ textAlign: 'center', color: 'azure', fontSize: '35px', margin: 0, marginTop: '10px' }}>
                                $2.99 / month
                            </p>
                            <Button style={btnStyle} href="/pricings/silver">
                                Benefits
                            </Button>
                            <img src={Silver} style={{ padding: '15px', width: '130px', marginBottom: '15px'  }}></img>
                        </Paper>
                        <Paper style={boxStyle} alignItems={"center"} direction={"column"}>
                            <div style={{ marginBottom: '20px', height: '10px', width: '60%', backgroundColor: 'rgb(250,214,74)', borderBottomLeftRadius: '3px', borderBottomRightRadius: '3px' }}></div>
                            <p style={pStyle}>
                                Gold
                            </p>
                            <p style={{ textAlign: 'center', color: 'azure', fontSize: '35px', margin: 0, marginTop: '10px' }}>
                                $7.99 / month
                            </p>
                            <Button style={btnStyle} href="/pricings/gold">
                                Benefits
                            </Button>
                            <img src={Gold} style={{ padding: '15px', width: '130px', marginBottom: '15px' }}></img>
                        </Paper>
                        <Paper style={boxStyle} alignItems={"center"} direction={"column"}>
                            <div style={{ marginBottom: '20px', height: '10px', width: '60%', backgroundColor: 'rgb(74,237,217)', borderBottomLeftRadius: '3px', borderBottomRightRadius: '3px' }}></div>
                            <p style={pStyle}>
                                Diamond
                            </p>
                            <p style={{ textAlign: 'center', color: 'azure', fontSize: '35px', margin: 0, marginTop: '10px' }}>
                                $15.99 / month
                            </p>
                            <Button style={btnStyle} href="/pricings/diamond">
                                Benefits
                            </Button>
                            <img src={Diamond} style={{ padding: '15px', width: '130px', marginBottom: '15px'  }}></img>

                        </Paper>
                        <Paper style={boxStyle} alignItems={"center"} direction={"column"}>
                            <div style={{ marginBottom: '20px', height: '10px', width: '60%', backgroundColor: 'rgb(148,148,148)', borderBottomLeftRadius: '3px', borderBottomRightRadius: '3px' }}></div>
                            <p style={pStyle}>
                                Bedrock
                            </p>
                            <p style={{ textAlign: 'center', color: 'azure', fontSize: '35px', margin: 0, marginTop: '10px' }}>
                                $59.99 / month
                            </p>
                            <Button style={btnStyle} href="/pricings/bedrock">
                                Benefits
                            </Button>
                            <img src={Bedrock} style={{ width: '130px', padding: '15px', marginBottom: '15px'  }}></img>
                        </Paper>
                    </Stack>
                </div>
                <p style={{ fontSize: 30, margin: '0px', marginTop: 30, color: "azure", textAlign: "center", fontFamily: '"Pixel", sans-serif' }}>
                    As you reach 1000$ spent on our server you become a member of our team as a sponsor.
                </p>
            </Stack>
        </>
    )
}
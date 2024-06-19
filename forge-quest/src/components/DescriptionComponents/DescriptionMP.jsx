import React from "react";
import { Button, Stack } from "@mui/material";

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

export default function RulesMP() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1000, margin: "auto", gap: '10px' }}>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 90, margin: 0, marginTop: 30, color: "azure", textAlign: "center" }}>
                    The full description is here!
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 40, margin: 0, marginTop: 30, letterSpacing: 0.5, color: "azure", textAlign: "left" }}>
                    This server is not about mini-games. It's about treating the players well. We know why popular servers closed,
                    it was because of the server’s terrible attitude towards its community.<br/><br/> Here it is not the administration that
                    creates the server, but the players. It is the players who decide every action. They are the ones who create the
                    maps, and they also help in the development of plugins.
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 90, margin: 0, marginTop: 100, color: "azure", textAlign: "center" }}>
                    Mini-games
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 40, margin: 0, marginTop: 30, letterSpacing: 0.5, color: "azure", textAlign: "left" }}>
                    Our server combines a lot of mini-games. There are even those that have been removed from the servers a long time
                    ago.<br/><br/> The advantage over other servers is that all mini-games are in one place. There is no need to buy ranks for
                    each server separately. To motivate players to play unpopular games, we have a system of prize pools for the best
                    players. People themselves will start playing where there is less competition in order to get into the top 20
                </p>
                <Button style={{ color: "azure" }}>To read more about each mini-game you can click here</Button>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 90, margin: 0, marginTop: 100, color: "azure", textAlign: "center" }}>
                    Ranks
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 40, margin: 0, marginTop: 30, letterSpacing: 0.5, color: "azure", textAlign: "left" }}>
                    Ranks on our server give a lot, and at the same time do not change the balance very much. <br />
                    There are a total of 8 ranks and 1 prefix. <br /><br />
                    Ranks: <br />
                    <br />
                    [SILVER],
                    [GOLD],
                    [DIAMOND],
                    [BEDROCK],
                    [YOUTUBE],
                    [MOD],
                    [ADMIN],
                    [OWNER] and Prefix [BETA] <br /><br />

                    Prefix [BETA] is only given to those who either bought a privilege on our server before official release
                    or played at least 100 hours before it <br /> <br />
                    Remember that we can change the rank bonuses, but we'll drop the price. We'll compensate this, don't worry
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 90, margin: 0, marginTop: 100, color: "azure", textAlign: "center" }}>
                    Clans
                </p>
                <p style={{ fontFamily: '"Pixel", sans serif', fontSize: 40, margin: 0, marginTop: 30, letterSpacing: 0.5, color: "azure", textAlign: "left" }}>
                    Our server has a clan system. You can create a clan if you have at least level 100 on the server.
                    We advise you to join one and play actively. <br/><br/> Every 3 months, clan points are reset so that new clans 
                    have a chance to get their place in the world rankings. The 3 clans with the most points will receive 
                    $5000, $3000 and $1500. <br/><br/> The reward will be fairly distributed among the 10 best participants of each clan. 
                    From 4th to 10th place, all members of these clans will receive a free privilege <br/>
                    <br/>
                    Maximum clan members: 30
                </p>
            </Stack>
        </>
    )
}
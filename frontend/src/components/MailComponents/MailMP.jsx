import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function MailMP() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '50px' }}>
            <Accordion style={{ backgroundColor: 'rgb(20,24,27)', color: 'azure' }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'azure' }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Clan System Update
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: 'rgb(20,24,27)', color: 'azure' }}>
                    We've made significant changes to the clan system to make your in-game interactions
                    even more exciting. Gain levels, develop your clan and compete for championship with other teams!
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ backgroundColor: 'rgb(20,24,27)', color: 'azure' }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'azure' }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Meet the "Demon Hunters" event
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: 'rgb(20,24,27)', color: 'azure' }}>
                    We are pleased to present a new addition to our RPG component of the server! Meet
                    the Demon Hunters, a new character class capable of summoning powerful spells and
                    fighting the dark forces that threaten our world. Dive into new quests, explore
                    dangerous locations, and earn unique rewards as you battle the toughest enemies
                    you'll ever encounter in our new dungeons!
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ backgroundColor: 'rgb(20,24,27)', color: 'azure' }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'azure' }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    The First Mini-game Update
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: 'rgb(20,24,27)', color: 'azure' }}>
                    Dear players! We're proud to announce a major update to our mini-game server that will change
                    the way you experience virtual entertainment. In this update, we have introduced some new exciting
                    games that will allow you to experience the real feeling of competition and fun.
                    <br /><br />
                    New games:
                    <br /><br />
                    SkyWars Deluxe: Immerse yourself in the atmosphere of the high skies and fight for survival on the
                    islands, collecting resources and fighting opponents.
                    BlockParty Mania: Dance to the music and show your reactions, trying not to be the last one out of the game.
                    Capture the Flag: Engage in team battles and capture enemy flags using strategy and coordination.
                    Improvements and innovations:
                    <br /><br />
                    New Maps and Arenas: We have added a number of new unique maps and arenas that will provide you with
                    a variety of new experiences and challenges.
                    Achievements and Rewards System: You can now earn achievements and special rewards for your gaming
                    successes and outstanding achievements.
                    Updated interface and improved performance: We have improved the interface and optimized server
                    performance to make your gaming sessions even more comfortable and enjoyable.
                    Special Events:
                    <br /><br />
                    Tournaments and Events: Participate in regular tournaments and special events to earn unique rewards
                    and prove your skills.
                    Special Weekends: Every week we have prepared special weekends for you, with unique discounts and
                    promotions in our stores.
                    We hope this update brings you a lot of joy and satisfaction. Join our community and don't miss
                    the chance to be part of a new era in the world of mini-games on our server!
                    <br /><br />
                    Sincerely,
                    Mini-game server team.
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
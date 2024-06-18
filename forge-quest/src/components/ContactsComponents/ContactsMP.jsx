import React from "react";
import { Grid, Stack, Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '../img/pfp.jpg'




export default function ContactsMP() {
    return (
        <>
            <Stack direction={"column"} sx={{ margin: "auto", gap: '30px' }}>
                <p style={{ fontFamily: '"Pixel", sans serif', letterSpacing: '3px', WebkitTextStroke: '1px', fontSize: 80, margin: 0, marginTop: 30, color: "azure", textAlign: "center" }}>
                    Contact with us!
                </p>
                <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Grid container rowSpacing={4} columnSpacing={2} justifyContent={"center"} columns={4}>
                        <Grid item>
                            <Card sx={{ maxWidth: 250, backgroundColor: 'rgb(30,30,30)', border: '1px solid rgb(57,69,87)' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        src={Avatar}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color={"azure"}>
                                            Sknery
                                        </Typography>
                                        <Typography variant="body2" color="rgb(189,189,189)">
                                            CrownPeak's CEO
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ maxWidth: 250, backgroundColor: 'rgb(30,30,30)', border: '1px solid rgb(57,69,87)' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        src={Avatar}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color={"azure"}>
                                            MasterCoder
                                        </Typography>
                                        <Typography variant="body2" color="rgb(189,189,189)">
                                            Lead Developer
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ maxWidth: 250, backgroundColor: 'rgb(30,30,30)', border: '1px solid rgb(57,69,87)' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        src={Avatar}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color={"azure"}>
                                            CommunityGuru
                                        </Typography>
                                        <Typography variant="body2" color="rgb(189,189,189)">
                                            Community Manager
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ maxWidth: 250, backgroundColor: 'rgb(30,30,30)', border: '1px solid rgb(57,69,87)' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        src={Avatar}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color={"azure"}>
                                            ServerGuardian
                                        </Typography>
                                        <Typography variant="body2" color="rgb(189,189,189)">
                                            Server Administrator
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ maxWidth: 250, backgroundColor: 'rgb(30,30,30)', border: '1px solid rgb(57,69,87)' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        src={Avatar}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color={"azure"}>
                                            PixelArtist
                                        </Typography>
                                        <Typography variant="body2" color="rgb(189,189,189)">
                                            Designer
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ maxWidth: 250, backgroundColor: 'rgb(30,30,30)', border: '1px solid rgb(57,69,87)' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        src={Avatar}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color={"azure"}>
                                            TechWizard
                                        </Typography>
                                        <Typography variant="body2" color="rgb(189,189,189)">
                                            Technical Specialist
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ maxWidth: 250, backgroundColor: 'rgb(30,30,30)', border: '1px solid rgb(57,69,87)' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        src={Avatar}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color={"azure"}>
                                            MarketingMaestro
                                        </Typography>
                                        <Typography variant="body2" color="rgb(189,189,189)">
                                            Marketing Manager
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ maxWidth: 250, backgroundColor: 'rgb(30,30,30)', border: '1px solid rgb(57,69,87)' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        src={Avatar}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color={"azure"}>
                                            CommunityCaptain
                                        </Typography>
                                        <Typography variant="body2" color="rgb(189,189,189)">
                                            Forum Administrator
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ maxWidth: 250, backgroundColor: 'rgb(30,30,30)', border: '1px solid rgb(57,69,87)' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        src={Avatar}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color={"azure"}>
                                            EventMaster
                                        </Typography>
                                        <Typography variant="body2" color="rgb(189,189,189)">
                                            Event Coordinator
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ maxWidth: 250, backgroundColor: 'rgb(30,30,30)', border: '1px solid rgb(57,69,87)' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        src={Avatar}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color={"azure"}>
                                            MediaMaestro
                                        </Typography>
                                        <Typography variant="body2" color="rgb(189,189,189)">
                                            Content Manager
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ maxWidth: 250, backgroundColor: 'rgb(30,30,30)', border: '1px solid rgb(57,69,87)' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        src={Avatar}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color={"azure"}>
                                            BugHunter
                                        </Typography>
                                        <Typography variant="body2" color="rgb(189,189,189)">
                                            Quality Assurance Tester
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </div>

            </Stack>
        </>
    )
}
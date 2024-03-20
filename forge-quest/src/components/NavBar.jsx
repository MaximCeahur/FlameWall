import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Stack } from "@mui/material";
import Link from '@mui/material/Link';

export default function NavBar() {
    return (
        <>
            <Container maxWidth="l" className="navbar">
                    <Button variant="text"
                        className="navbar-logo"
                        style={{ color: '#F3F3F3' }}>ForgeQuest</Button>
                    <Stack direction="row"
                    spacing={5}>
                        <Link href="#" underline="none" fontSize={20} color={"white"}>
                            {'Contacts'}
                        </Link>
                        <Link href="#" underline="none" fontSize={20} color={"white"}>
                            {'Rules'}
                        </Link>
                        <Link href="#" underline="none" fontSize={20} color={"white"}>
                            {'Store'}
                        </Link>
                        <Link href="#" underline="none" fontSize={20} color={"white"}>
                            {'Your Profile'}
                        </Link>
                    </Stack>
                    <Stack direction="row"
                    spacing={5}>
                        <Link href="#" underline="none" fontSize={20} color={"white"}>
                            {'Log in'}
                        </Link>
                        <Link href="#" underline="none" fontSize={20} color={"white"}>
                            {'Register'}
                        </Link>
                    </Stack>
            </Container>
        </>
    )
}

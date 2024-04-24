import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import LeftSidePanel from './components/LeftSidePanel';
import Description from './components/Description'

import { Box, Stack } from "@mui/material";
import { Divider } from "@mui/material";
import zIndex from '@mui/material/styles/zIndex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Stack direction="row" style={{ justifyContent: 'space-between' }}>
            <LeftSidePanel />
            <div className="vertical-divider"></div>
            <Box className="main-box" style={{ width: '100%' }}>
                <NavBar />
                <div className='line'></div>
                <MainPage />
                <Divider style={{ paddingLeft: '250px', margin: 'auto' }}></Divider>
                <Description />
            </Box>
        </Stack>
    </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

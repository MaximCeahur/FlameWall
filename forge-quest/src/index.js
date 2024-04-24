import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import LeftSidePanel from './components/LeftSidePanel';

import { Box, Stack } from "@mui/material";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Stack direction="row" style={{justifyContent: 'space-between'}}>
            <LeftSidePanel />
            <div className="vertical-divider"></div>
            <Box style={{ width: '100%' }}>
                <NavBar />
                <div className='line'></div>
                <MainPage />
            </Box>

        </Stack>
    </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

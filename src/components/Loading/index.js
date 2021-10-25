import React from 'react'

import {css} from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import './style.css'
import {useSelector} from 'react-redux'
const override = css`
    position: fixed;
    z-index: 9000;
    height: 100vh;
    width: 100%;
    background-color: #00000085;
    display: flex; 
    justify-content: center;
    align-items: center;
`;

export default function Index() {
    const general = useSelector(state => state.general)
    const {isLoading}=general
    return ( 
        <div data-testid="loading-container">
        <BeatLoader
            
            size={30}
            margin={2}
            color={"#FFC466"}
            loading={isLoading}
            css={override}
        />
        </div>
    )
}

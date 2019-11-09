import React from "react";
import List from './List';
import smurfPic from '../image/smurfs-villagers.jpg'
import styled from 'styled-components';
import "./App.css";

const StyledTitle = styled.h1`
    border: 5px solid #EE2B07;
    border-radius: 10px;
    background-color: #DDD300;
    width: 500px;
    margin: 0 auto;
`;

const StyledImage = styled.img`
    border: 5px solid #EE2B07;
    border-radius: 10px;    
    width: 500px;
    margin: 10px;
`;

const App = () => {
    return (
        <div className="App">
            <StyledTitle>SMURF VILLAGERS!</StyledTitle>
            <StyledImage src={smurfPic} alt='brainy smurf' />
            <List />
        </div>
    );

}

export default App;
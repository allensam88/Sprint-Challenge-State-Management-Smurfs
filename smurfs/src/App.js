import React from "react";
import { Route } from 'react-router-dom';
import smurfPic from './image/smurfs-villagers.jpg'
import List from './components/List';
import AddFormModal from './components/AddFormModal';
import EditForm from './components/EditForm';
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
            <StyledImage src={smurfPic} alt='smurf characters' />
            <Route exact path='/' component={List} />
            <Route exact path='/add' component={AddFormModal} />
            {/* <Route exact path="/edit" component={EditForm} /> */}
            <Route exact path="/edit/:id" component={EditForm} />
        </div>
    );

}

export default App;
import React from 'react'
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import styled from 'styled-components'

const StyledCard = styled.div`
    border: 5px solid #EE2B07;
    border-radius: 10px;
    background-color: #DDD300;
    width: 200px;
    margin: 20px;
    padding-bottom: 10px;
`;

const StyledButton = styled.button`
    font-size: 15px;
    border: 1px solid #EE2B07;
    border-radius: 5px;
    margin: 5px;
    padding: 2px 8px;
    color: black;
    background-color: #53A3F8;

    :hover {
        border: 1px solid black;
        background-color: #EE2B07;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const Card = props => {
    return (
        <StyledCard>
            <h3>{props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <DeleteModal smurf={props.smurf} deleteModal={props.deleteModal} closeDelete={props.closeDelete} />
            <StyledButton><StyledLink to={`/edit/${props.smurf.id}`}>edit</StyledLink></StyledButton>
            <StyledButton type='button' onClick={props.openDelete}>delete</StyledButton>
        </StyledCard>
    )
}

export default Card;
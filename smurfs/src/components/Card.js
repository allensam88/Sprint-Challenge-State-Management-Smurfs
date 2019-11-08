import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledCard = styled.div`
    border: 5px solid #EE2B07;
    border-radius: 10px;
    background-color: #DDD300;
    width: 200px;
    margin: 20px;
    padding-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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
`

const Card = props => {
    return (
        <StyledCard>
            <h3>{props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <StyledLink to={{pathname: `/update-form/`, state: {smurf: props.smurf}}}>edit</StyledLink>
            <StyledLink to={{pathname: `/delete/`, state: {smurf: props.smurf}}}>delete</StyledLink>
        </StyledCard>
    )
}

export default Card;
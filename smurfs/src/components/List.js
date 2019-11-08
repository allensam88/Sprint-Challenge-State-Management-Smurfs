import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import Card from './Card';
import styled from 'styled-components'

const StyledLink = styled(Link)`
    text-decoration: none;
    border: 1px solid #EE2B07;
    border-radius: 5px;
    margin: 5px;
    padding: 2px 8px;
    color: black;
    background-color: #DDD300;

    :hover {
        border: 1px solid black;
        background-color: #EE2B07;
    }
`;

const StyledList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const List = props => {
    useEffect(() => {
        props.fetchData();
    }, [])

    if (!props) {
        return (
            <p>Loading Client Data...</p>
        )
    } else {
        return (
            <div>
                <StyledLink to={`/add-form/`}>Add Villager</StyledLink>
                <StyledList>
                    {props.smurfs.map(smurf => {
                        return <Card key={smurf.id} smurf={smurf} />
                    })}
                </StyledList>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { fetchData })(List);
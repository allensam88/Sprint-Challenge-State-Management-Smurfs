import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import Card from './Card';

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
                <Link to={`/add-form/`}>Add New Smurf</Link>
                {props.smurfs.map(smurf => {
                    return <Card key={smurf.id} smurf={smurf} />
                })}
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
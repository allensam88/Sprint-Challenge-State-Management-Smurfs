import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import AddForm from './AddForm';
import Card from './Card';
import "./App.css";

const App = props => {
    console.log('fetch', props)
    useEffect(() => {
        props.fetchData();
    }, [props.smurfs])

    if (!props) {
        return (
            <p>Loading Client Data...</p>
        )
    } else {
        return (
            <div className="App">
                <h1>SMURF VILLAGERS</h1>
                <AddForm />
                {props.smurfs.map(smurf => {
                return <Card key={smurf.id} smurf={smurf} />
          })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { fetchData })(App);
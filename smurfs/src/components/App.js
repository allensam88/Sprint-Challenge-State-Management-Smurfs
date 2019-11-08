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
    }, [])

    if (!props) {
        return (
            <p>Loading Client Data...</p>
        )
    } else {
        return (
            <div className="App">
                <h1>SMURFS! 2.0 W/ Redux</h1>
                <div>Welcome to your state management version of Smurfs!</div>
                <div>Start inside of your `src/index.js` file!</div>
                <div>Have fun!</div>
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
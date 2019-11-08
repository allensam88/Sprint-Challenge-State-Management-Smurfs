import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import List from './List';
import AddForm from './AddForm';
import UpdateForm from './UpdateForm';

import "./App.css";

const App = props => {
    return (
        <div className="App">
            <h1>SMURF VILLAGERS</h1>
            <Route exact path="/" component={List} />
            <Route path="/add-form/" component={AddForm} />
            <Route path="/update-form/" component={UpdateForm} />
        </div>
    );

}

export default App;
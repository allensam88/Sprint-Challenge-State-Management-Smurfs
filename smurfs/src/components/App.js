import React from "react";
import { Route } from 'react-router-dom';
import List from './List';
import AddForm from './AddForm';
import UpdateForm from './UpdateForm';
import Delete from './Delete';

import "./App.css";

const App = props => {
    return (
        <div className="App">
            <h1>SMURF VILLAGERS</h1>
            <Route exact path="/" component={List} />
            <Route path="/add-form/" component={AddForm} />
            <Route path="/update-form/" component={UpdateForm} />
            <Route path="/delete/" component={Delete} />
        </div>
    );

}

export default App;
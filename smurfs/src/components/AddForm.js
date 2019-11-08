import React, { useState } from "react";
import { connect } from 'react-redux';
import { addData } from '../actions';

const AddForm = props => {
    const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

    const handleChanges = event => {
        setSmurf({ ...smurf, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        const newSmurf = {
            id: Date.now(),
            name: smurf.name,
            age: smurf.age,
            height: smurf.height,
        };
        props.addData(newSmurf);
        alert(`Successfully added user "${smurf.name}"`);
        setSmurf({
            name: "",
            age: "",
            height: ""
        });
        props.history.push('/')
    };

    if (props.isAdding) {
        return (
            <p>Adding Smurf...</p>
        )
    } else {

        return (
            <div>
                <form onSubmit={submitForm}>

                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChanges}
                        value={smurf.name}
                        autoComplete='off'
                    />
                    <input
                        id="age"
                        type="text"
                        name="age"
                        placeholder="age"
                        onChange={handleChanges}
                        value={smurf.age}
                        autoComplete='off'
                    />
                    <input
                        id="height"
                        type="text"
                        name="height"
                        placeholder="height"
                        onChange={handleChanges}
                        value={smurf.height}
                        autoComplete='off'
                    />
                    <button type="submit">Add Smurf</button>
                </form>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        isAdding: state.isAdding
    }
}

export default connect(mapStateToProps, { addData })(AddForm);
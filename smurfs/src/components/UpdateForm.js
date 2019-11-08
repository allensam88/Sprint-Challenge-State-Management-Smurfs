import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateData } from '../actions';

const UpdateForm = props => {
    const [updatedSmurf, setUpdatedSmurf] = useState({
        id: 0,
        name: '',
        age: '',
        height: '',
    });

    const handleChanges = e => {
        setUpdatedSmurf({ ...updatedSmurf, [e.target.name]: e.target.value });
    }

    const submitChanges = e => {
        e.preventDefault();
        props.updateData(updatedSmurf);
        alert(`Updated information for ${updatedSmurf.name}`);
    }

    if (props.isUpdating) {
        return (
            <p>Updating Client Information...</p>
        )
    } else {
        return (
            <div>
                <form onSubmit={submitChanges}>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name"
                        // placeholder={props.smurf.name} 
                        value={updatedSmurf.name} 
                        onChange={handleChanges} />
                    <label>Age:</label>
                    <input 
                        type="text" 
                        name="age"
                        // placeholder={props.smurf.age}  
                        value={updatedSmurf.age} 
                        onChange={handleChanges} />
                    <label>Height:</label>
                    <input 
                        type="text" 
                        name="height"
                        // placeholder={props.smurf.height}  
                        value={updatedSmurf.height} 
                        onChange={handleChanges} />
                    <button>Submit Changes</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isUpdating: state.isUpdating
    }
}

export default connect(mapStateToProps, { updateData })(UpdateForm);
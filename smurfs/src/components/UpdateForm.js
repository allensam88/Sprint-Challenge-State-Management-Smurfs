import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateData } from '../actions';

const UpdateForm = props => {
    const [smurf, setSmurf] = useState({
        id: 0,
        name: '',
        age: '',
        height: '',
    });

    const handleChanges = e => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        // const id = props.match.params.id;
        axios
            .get(`http://localhost:3333/smurfs/`)
            .then(res => {
                setSmurf(res.data)
            })
    }, [])

    const submitChanges = e => {
        e.preventDefault();
        props.updateData(smurf);
        alert(`Updated information for ${smurf.name}`);
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
                    <input type="text" name="name" value={smurf.name} onChange={handleChanges} />
                    <label>Age:</label>
                    <input type="text" name="age" value={smurf.age} onChange={handleChanges} />
                    <label>Height:</label>
                    <input type="text" name="height" value={smurf.height} onChange={handleChanges} />
                    <button>Submit Changes</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isUpdating: state.isUpdating
    }
}

export default connect(mapStateToProps, { updateData })(UpdateForm);
import React, { useState } from "react";
import { connect } from 'react-redux';
import { addData } from '../actions';
// import styled from 'styled-components';

// const StyledForm = styled.form`
//     display: flex;
//     flex-direction: column;
//     align-items:center;
// `

// const Button = styled.button`
//     width: 12rem;
//     height: 3rem;
//     margin: 1.2rem 0;
//     border-radius: 5px;
//     background: #73A85A;
//     color: white;
//     font-size: 1rem;
//     font-weight: bold;

//     :hover {
//         background: white;
//         color: #73A85A;
//         border: 1px solid #73A85A;
//     }
// `

// const NameInput = styled.input`
//     height: 3rem;
//     width: 18rem;
//     margin-top: 4rem;
//     margin-bottom: 1rem;
//     font-size: 1.4rem;
//     border: 1px solid #4e4e4e;
// `

// const OtherInput = styled.input`
//     height: 3rem;
//     width: 18rem;
//     margin: 1rem 0;
//     font-size: 1.4rem;
//     border: 1px solid #4e4e4e;
// `
// const Required = styled.h3`
//     color: #363636;
//     opacity: .8;
// `

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
import React, { useState } from "react";
import { connect } from 'react-redux';
import { addData } from '../actions';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledInput = styled.input`   
    font-size: 15px;    
    line-height: 25px;
    border: 1px solid #EE2B07;
    border-radius: 5px;
    width: 200px;
    margin: 10px auto;
    padding-left: 5px;
`;

const StyledButton = styled.button`
font-size: 20px;    
border: 1px solid #EE2B07;
    border-radius: 5px;
    width: 150px;
    margin: 20px auto;
    padding: 5px;
    color: black;
    background-color: #DDD300;

    :hover {
        border: 1px solid black;
        background-color: #EE2B07;
    }
`;

const AddFormModal = props => {
    const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

    const showHideClassName = props.addModal ? "modal display-block" : "modal display-none";

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
        props.closeAdd();
    };

    if (props.isAdding) {
        return (
            <p>Adding Smurf...</p>
        )
    } else {

        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <StyledForm onSubmit={submitForm}>
                        <StyledInput
                            id="name"
                            type="text"
                            name="name"
                            placeholder="name"
                            onChange={handleChanges}
                            value={smurf.name}
                            autoComplete='off'
                        />
                        <StyledInput
                            id="age"
                            type="text"
                            name="age"
                            placeholder="age"
                            onChange={handleChanges}
                            value={smurf.age}
                            autoComplete='off'
                        />
                        <StyledInput
                            id="height"
                            type="text"
                            name="height"
                            placeholder="height"
                            onChange={handleChanges}
                            value={smurf.height}
                            autoComplete='off'
                        />
                        <StyledButton>Add Smurf</StyledButton>
                    </StyledForm>
                </section>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        isAdding: state.isAdding
    }
}

export default connect(mapStateToProps, { addData })(AddFormModal);
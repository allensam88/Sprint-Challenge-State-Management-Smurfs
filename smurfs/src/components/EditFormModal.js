import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateData } from '../actions';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 270px;
    margin: 0 auto;
`;

const StyledLabel = styled.label`
    text-align: right;    
    font-size: 15px;    
    line-height: 25px;
    border: 1px transparent;
    border-radius: 5px;
    width: 200px;
    margin: 10px auto;
    padding-right: 5px;
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
    width: 125px;
    margin: 20px auto;
    padding: 5px;
    color: black;
    background-color: #DDD300;

    :hover {
        border: 1px solid black;
        background-color: #EE2B07;
    }
`;

const EditFormModal = props => {
    const [updatedSmurf, setUpdatedSmurf] = useState({
        id: 0,
        name: '',
        age: '',
        height: ''
    });

    const showHideClassName = props.editModal ? "modal display-block" : "modal display-none";

    const handleChanges = e => {
        setUpdatedSmurf({ ...updatedSmurf, [e.target.name]: e.target.value });
    }

    const submitChanges = e => {
        e.preventDefault();
        props.updateData(updatedSmurf);
        alert(`Updated information for ${updatedSmurf.name}`);
        props.closeEdit()
    }

    if (props.isUpdating) {
        return (
            <p>Updating Client Information...</p>
        )
    } else {
        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <StyledForm onSubmit={submitChanges}>
                        <StyledDiv>
                            <StyledLabel>Name:</StyledLabel>
                            <StyledInput
                                type="text"
                                name="name"
                                placeholder={props.smurf.name}
                                value={updatedSmurf.name}
                                onChange={handleChanges} />
                        </StyledDiv>
                        <StyledDiv>
                            <StyledLabel>Age:</StyledLabel>
                            <StyledInput
                                type="text"
                                name="age"
                                placeholder={props.smurf.age}
                                value={updatedSmurf.age}
                                onChange={handleChanges} />
                        </StyledDiv>
                        <StyledDiv>
                            <StyledLabel>Height:</StyledLabel>
                            <StyledInput
                                type="text"
                                name="height"
                                placeholder={props.smurf.height}
                                value={updatedSmurf.height}
                                onChange={handleChanges} />
                        </StyledDiv>
                        <StyledButton>Update</StyledButton>
                    </StyledForm>
                </section>
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

export default connect(mapStateToProps, { updateData })(EditFormModal);
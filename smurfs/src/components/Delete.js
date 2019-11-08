import React from 'react';
import { deleteData } from '../actions';
import { connect } from 'react-redux';

const DeleteSmurf = props => {

    const handleSubmit = e => {
        e.preventDefault();
        props.deleteData(props.location.state.smurf)
        alert(`${props.location.state.smurf.name} was deleted`);
        props.history.push('/')
    }

    const goBack = e => {
        e.preventDefault();
        props.history.push(`/`)
    }

    if (props.isDeleting) {
        return (
            <p>Deleting Client...</p>
        )
    } else {

    return (
        <div>
            <p>Are you sure you want to permanently delete this smurf?</p>
            <button onClick={handleSubmit}>{`Yes. Delete ${props.location.state.smurf.name}`}</button>
            <button onClick={goBack}>No. Go back to the main page.</button>
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        isDeleting: state.isDeleting
    }
}

export default connect(mapStateToProps, { deleteData })(DeleteSmurf);
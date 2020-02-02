import React from 'react';
import { deleteData } from '../actions';
import { connect } from 'react-redux';

const DeleteModal = props => {
    const showHideClassName = props.deleteModal ? "modal display-block" : "modal display-none";

    const handleSubmit = e => {
        e.preventDefault();
        props.deleteData(props.smurf)
        alert(`${props.smurf.name} was deleted`);
        props.closeDelete()
    }

    const goBack = e => {
        e.preventDefault();
        props.closeDelete()
    }

    if (props.isDeleting) {
        return (
            <p>Deleting Client...</p>
        )
    } else {

        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <p>Are you sure you want to permanently delete this smurf?</p>
                    <button onClick={handleSubmit}>{`Yes. Delete ${props.smurf.name}`}</button>
                    <button onClick={goBack}>No. Go back to the main page.</button>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isDeleting: state.isDeleting
    }
}

export default connect(mapStateToProps, { deleteData })(DeleteModal);
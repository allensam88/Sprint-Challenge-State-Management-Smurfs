import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import AddFormModal from '../components/AddFormModal';
import Card from './Card';
import styled from 'styled-components'

const StyledButton = styled.button`
    font-size: 20px;
    border: 1px solid #EE2B07;
    border-radius: 5px;
    margin: 5px;
    padding: 2px 8px;
    color: black;
    background-color: #DDD300;

    :hover {
        border: 1px solid black;
        background-color: #EE2B07;
    }
`;

const StyledList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const List = props => {
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const openAdd = () => {
        setAddModal(true);
    }

    const closeAdd = () => {
        setAddModal(false);
    }

    const openEdit = () => {
        setEditModal(true);
    }

    const closeEdit = () => {
        setEditModal(false);
    }

    const openDelete = () => {
        setDeleteModal(true);
    }

    const closeDelete = () => {
        setDeleteModal(false);
    }
    
    useEffect(() => {
        props.fetchData();
    }, [addModal, editModal])

    if (!props) {
        return (
            <p>Loading Client Data...</p>
        )
    } else {
        return (
            <div>
                <AddFormModal addModal={addModal} closeAdd={closeAdd} />
                <StyledButton type='button' onClick={openAdd}>Add Villager</StyledButton>
                <StyledList>
                    {props.smurfs.map(smurf => {
                        return <Card key={smurf.id} smurf={smurf} editModal={editModal} deleteModal={deleteModal} openEdit={openEdit} closeEdit={closeEdit} openDelete={openDelete} closeDelete={closeDelete}/>
                    })}
                </StyledList>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { fetchData })(List);
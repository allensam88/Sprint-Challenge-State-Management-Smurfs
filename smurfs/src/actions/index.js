import axios from 'axios';

export const START_FETCH = 'START_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const START_ADD = 'START_ADD';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const UPDATE_START = 'UPDATE_START';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

// export const DELETE_START = 'DELETE_START';
// export const DELETE_SUCCESS = 'DELETE_SUCCESS';
// export const DELETE_FAILURE ='DELETE_FAILURE';

export const fetchData = () => dispatch => {
    dispatch({ type: START_FETCH });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }));
}

export const addData = newSmurf => dispatch => {
    dispatch({ type: START_ADD });
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => dispatch({ type: ADD_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ADD_FAILURE, payload: err }))
}

export const updateData = updatedInfo => dispatch => {
    dispatch({ type: UPDATE_START });

    axios
    .put(`/api/client/${updatedInfo.id}`, updatedInfo)
    .then(res => dispatch({ type: UPDATE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_FAILURE, payload: err }))
}

// export const deleteData = client => dispatch => {
//     dispatch({ type: DELETE_START });

//     axios
//     .delete(`/api/client/${client.id}`)
//     .then(res => dispatch({ type: DELETE_SUCCESS, payload: client.id }))
//     .catch(err => dispatch({ type: DELETE_FAILURE, payload: err }))
// }
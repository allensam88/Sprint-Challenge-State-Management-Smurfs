import { START_FETCH, FETCH_SUCCESS, FETCH_FAILURE, START_ADD, ADD_SUCCESS, ADD_FAILURE } from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    isAdding: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCH:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case START_ADD:
            return {
                ...state,
                isAdding: true,
                error: ''
            }
        case ADD_SUCCESS:
            return {
                ...state,
                isAdding: false,
                error: '',
                smurfs: [...state.smurfs, action.payload]
            }
        case ADD_FAILURE:
            return {
                ...state,
                error: action.payload,
                isAdding: false
            }
        default:
            return state;
    }
}

export default reducer;
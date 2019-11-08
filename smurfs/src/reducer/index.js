import { START_FETCH, FETCH_SUCCESS, FETCH_FAILURE, START_ADD, ADD_SUCCESS, ADD_FAILURE, UPDATE_START, UPDATE_SUCCESS, UPDATE_FAILURE } from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    isAdding: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //FETCHING FINITE STATE MACHINE
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
        //ADDING FINITE STATE MACHINE
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
        //UPDATING FINITE STATE MACHINE
        case UPDATE_START:
            return {
                ...state,
                isAdding: true,
                error: ''
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                error: '',
                smurfs: [...state.smurfs.filter(item => { return item.id !== action.payload.id }), action.payload]
            }
        case UPDATE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isUpdating: false
            }
        //DELETING FINITE STATE MACHINE
        // case DELETE_START:
        //     return {
        //         ...state,
        //         isDeleting: true,
        //         error: ''
        //     }
        // case DELETE_SUCCESS:
        //     return {
        //         ...state,
        //         isDeleting: false,
        //         error: '',
        //         smurfs: state.smurfs.filter(item => { return item.id !== action.payload })
        //     }
        // case DELETE_FAILURE:
        //     return {
        //         ...state,
        //         error: action.payload,
        //         isDeleting: false
        //     }
        default:
            return state;
    }
}

export default reducer;
// src/reducers/board-reducer.js

const defaultState = {
    boardList: [],
    boards: [],
    board: {name:{}, locations:[]},
    loading: false,
    errors: {}
};

export default (state=defaultState, action={}) => {

    switch (action.type) {

        case 'FETCH_BOARDS_FULFILLED': {
            console.log(action.payload);
            return {
                ...state,
                boardList: action.payload.data.data||action.payload.data,
                loading: false,
                errors:{}
            }
        }
        case 'FETCH_BOARD_FULFILLED': {
            return {
                ...state,
                board: action.payload.data,
                loading:false,
                locations: action.payload.data.locations
            }
        }

        case 'FETCH_BOARDS_PENDING': {
            return {
                ...state,
                loading: true,
                errors: {}
            }
        }

        case 'FETCH_BOARD_PENDING': {
            return {
                ...state,
                loading: true,
                errors: {}
            }
        }
        case 'NEW_BOARD':{
            return {
                ...state,
                boards: {name:{}}
            }
        }
        case 'SAVE_BOARD_PENDING':{
            return {
                ...state,
                loading:true
            }
        }
        case 'SAVE_BOARD_FULFILLED':{
            return {
                ...state,
                boards:[...state.boards, action.payload.data],
                errors:{},
                loading:false
            }
        }
        case 'SAVE_BOARD_REJECTED' : {
            const data = action.payload.response.data;
            const {name:name, locations:locations}=data.errors;
            const errors = {global: data.message, name:name, locations:locations};
            return {
                ...state,
                errors:errors,
                loading:false
            }
        }
        case 'DELETE_BOARD_FULFILLED': {
            const _id = action.payload.data.id;
            return {
                ...state,
                boardList: state.boardList.filter(item => item.id !== _id)
            }
        }
        default:
            return defaultState;
    }
}
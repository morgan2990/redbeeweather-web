import {client} from '../';

const url='/board';

export function fetchBoards(){
    return dispatch => {
        dispatch({
            type:'FETCH_BOARDS',
            payload: client.get(url)
        })
    }
}

export function newBoard(){
    return dispatch => {
        dispatch({
            type:'NEW_BOARD'
        })
    }
}

export function saveBoard(board){
    return dispatch => {
        return dispatch ({
            type:'SAVE_BOARD',
            payload: client.post(url, board)
        })
    }
}

export function fetchBoard(boardId){
    return dispatch => {
        return dispatch({
            type: 'FETCH_BOARD',
            payload: client.get(`${url}/${boardId}`)
        })
    }
}

export function updateBoard(board) {
    return dispatch => {
        return dispatch({
            type: 'UPDATE_BOARD',
            payload: client.put(`${url}/${board.boardId}`, board)
        })
    }
}

export function deleteBoard(boardId) {
    return dispatch => {
        return dispatch({
            type: 'DELETE_BOARD',
            payload: client.delete(`${url}/${boardId}`)
        })
    }
}
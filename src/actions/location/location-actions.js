import {client} from '../';

const locationUrl='/location';
const boardUrl='/boardLocation';

export function fetchLocations(){
    return dispatch => {
        dispatch({
            type:'FETCH_LOCATIONS',
            payload: client.get(locationUrl)
        })
    }
}

export function newLocation(){
    return dispatch => {
        dispatch({
            type:'NEW_LOCATION'
        })
    }
}

export function saveLocation(location){
    return dispatch => {
        return dispatch ({
            type:'SAVE_LOCATION',
            payload: client.post(locationUrl, location)
        })
    }
}

export function fetchLocation(locationId){
    return dispatch => {
        return dispatch({
            type: 'FETCH_LOCATION',
            payload: client.get('${locationUrl}/${locationId}')
        })
    }
}

export function removeLocationFromBoard(locationId, boardId){
    return dispatch => {
        return dispatch({
            type: 'REMOVE_LOCATION_FROM_BOARD',
            payload: client.delete(`${locationUrl}/${boardId}`, locationId)
        })
    }
}

export function addLocationToBoard(locationId, boardId){
    return dispatch => {
        return dispatch({
            type: 'ADD_LOCATION_TO_BOARD',
            payload: client.post(`${locationUrl}/${boardId}`, locationId)
        })
    }
}

export function updateLocation(location) {
    return dispatch => {
        return dispatch({
            type: 'UPDATE_LOCATION',
            payload: client.put(`${locationUrl}/${location.locationId}`, location)
        })
    }
}

export function deleteLocation(locationId) {
    return dispatch => {
        return dispatch({
            type: 'DELETE_LOCATION',
            payload: client.delete(`${locationUrl}/${locationId}`)
        })
    }
}

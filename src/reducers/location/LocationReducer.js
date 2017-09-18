// src/reducers/location-reducer.js

const defaultState = {
    locations: []
}

export default (state=defaultState, action={}) => {
    const defaultState = {
        locationList : [],
        locations: [],
        location: {name:{}, weatherCondition:{}},
        loading: false,
        errors: {}
    };
    switch (action.type) {

        case 'FETCH_LOCATIONS_FULFILLED': {
            console.log(action.payload)
            return {
                ...state,
                locationList: action.payload.data.data || action.payload.data // in case pagination is disabled
            }
        }

        case 'FETCH_LOCATION_FULFILLED': {
            return {
                ...state,
                locations: action.payload.data.data || action.payload.data // in case pagination is disabled
            }
        }

        case 'FETCH_LOCATIONS_FOR_BOARD_FULFILLED': {
            return {
                ...state,
                locations: action.payload.data.data || action.payload.data // in case pagination is disabled
            }
        }
        case 'NEW_LOCATION':{
            return {
                ...state,
                locations: {name:{}}
            }
        }
        case 'SAVE_LOCATION_PENDING':{
            return {
                ...state,
                loading:true
            }
        }
        case 'SAVE_LOCATION_FULFILLED':{
            return {
                ...state,
                locations:[...state.locations, action.payload.data],
                errors:{},
                loading:false
            }
        }
        case 'SAVE_LOCATION_REJECTED' : {
            const data = action.payload.response.data;
            const {name:name, woeId:woeId, condition:{temp:temp, text:text, date:date}}=data.errors;
            const errors = {global: data.message, name:name, woeId:woeId, condition:{temp:temp, text:text, date:date}};
            return {
                ...state,
                errors:errors,
                loading:false
            }
        }

        case 'DELETE_LOCATION_FULFILLED': {
            const _id = action.payload.data.id;
            return {
                ...state,
                locations: state.locations.filter(item => item.id !== _id)
            }
        }
        default:
            return defaultState;
    }
}
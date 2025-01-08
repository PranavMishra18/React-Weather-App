import { ACTIONS } from "./WeatherContext";

export function WeatherReducer(state,action){    

    switch (action.type) {
        case ACTIONS.GET_TEMPERATURE:
            return {...state,loading : false, result : action.payload}
            
        case ACTIONS.SET_LOADING:
            return {...state, loading : true}
            
        case ACTIONS.CLEAR_RESULT:
            return {...state, result : {},loading : false}
    
        default:
            return state;
    }

}
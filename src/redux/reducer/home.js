const initialState = {
    donation: [],
    type: 'all',
    all: [],
    uang: [],
    perangkat: [],
    donationByType: [],
}

export const homeReducer = (state = initialState, action) => {
    if(action.type === 'SET_DONATION'){
        return {
           ...state,
            donation: action.value,
        }
    }
    if(action.type === 'SET_ALL'){
        return {
           ...state,
            all: action.value,
        }
    }
    if(action.type === 'SET_UANG'){
        return {
           ...state,
            uang: action.value,
        }
    }
    if(action.type === 'SET_PERANGKAT'){
        return {
           ...state,
            perangkat: action.value,
        }
    }
    if(action.type === 'SET_TYPE'){
        return {
           ...state,
            type: action.value,
        }
    }
    return state
}
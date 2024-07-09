const initialHome = {
    donation: []
}

export const homeReducer = (state = initialHome, action) => {
    if(action.type === 'SET_DONATION'){
        return {
            ...state,
            donation: action.value
        }
    }
    return state
}
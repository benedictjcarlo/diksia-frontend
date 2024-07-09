const initStateRegister = {
    name: '',
    email: '',
}

export const registerReducer = (state = initStateRegister, action) => {
    if(action.type === 'SET_REGISTER'){
        return {
            ...state,
            name: action.value.name,
            email: action.value.email,
        }
    }
    return state
}
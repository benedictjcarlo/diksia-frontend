const initialDonasi = {
    aktivitas: [],
}

export const aktivitasReducer = (state = initialDonasi, action) => {
    if(action.type === 'SET_AKTIVITAS') {
        return {
            ...state,
            aktivitas: action.value
        }
    }
    return state
}
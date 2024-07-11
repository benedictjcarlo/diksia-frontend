const initialCategory = {
    uang: [],
    perangkat: [],
    all: [],
  };
  
  export const categoryReducer = (state = initialCategory, action) => {
    if (action.type === 'SET_UANG') {
      return {
        ...state,
        uang: action.value,
      };
    }
    if (action.type === 'SET_PERANGKAT') {
      return {
        ...state,
        perangkat: action.value,
      };
    }
    if (action.type === 'SET_ALL') {
      return {
        ...state,
        all: action.value,
      };
    }
    return state;
  };
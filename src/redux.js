export const initialState = {
    basket: '',
    
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BASKET":
            return {
                ...state,
                basket: action.payload 
            };
        default:
            return state;
    }
  };

  export const setBasket = basket => {
    return {
        type: "SET_BASKET",
        payload: basket
    };
};
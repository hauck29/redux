
const ADD_TO_CART = 'cart/addToCart';

//this is an action creator
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    };
};
//comment
export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const newCount = state[action.id]?.count ? state[action.id].count + 1 : 1;
            return{
                ...state,
                [action.id]: {id: action.id, count: newCount}
            }
        }

        default:
            return state;
    }
  };

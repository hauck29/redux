import produceData from '../mockData/produce.json';

const POPULATE = 'cart/POPULATE';

export const populateCart = () => {
    return {
        type: POPULATE,
        produce: produceData
    };
};
//cxomment
export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach(produce => {
                newState[produce.id] = produce;
            });
            return newState;
        default:
            return state;
    }
  };

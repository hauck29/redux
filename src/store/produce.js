import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';

//this is an action creator
export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    };
};

//by convention, all reducers should have this structure
//this should return the old state or the new state, depending on
//the type of action that gets dispatched.
export default function produceReducer(state = {}, action) {
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

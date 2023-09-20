import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';

//action
export const populateProduce = () => {

    console.log('inside action creator');

    return {
        type: POPULATE,
        produce: produceData,
    }
}

//reducers
export default function produceReducer(state = {}, action) {

    console.log('inside produceReducer', state);

    switch (action.type) {
      case POPULATE:
        const newState = {};
        //normalizing/flattening data
        action.produce.forEach(produce => {
            newState[produce.id] = produce;
          });
          return newState;
      default:
        return state;
    }
  }

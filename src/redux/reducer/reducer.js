// reducers/locations.ts

import {ADD_LOCATION} from '../action/action';

const initialState = {
  locations: [],
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        locations: [...state.locations, action.payload],
      };
    default:
      return state;
  }
};

export default locationsReducer;

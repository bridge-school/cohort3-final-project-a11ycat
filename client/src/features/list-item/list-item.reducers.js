import { ACTION_TYPES } from './list-item.types';

const INITIAL_STATE = {
  locations: []
};

export const listItemReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.thisAction:
      return { ...state, ...{ sampleKey1: payload } };

    case ACTION_TYPES.thatAction:
      return { ...state, ...{ list: payload } };

    case ACTION_TYPES.updateLocations:
      return { ...state, locations: payload.locations };

    default:
      return state;
  }
};

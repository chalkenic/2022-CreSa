import {
  CREATE_CITY,
  RETRIEVE_CITIES,
  UPDATE_CITIES,
  DELETE_CITY,
  DELETE_ALL_CITIES,
} from "../actions/types";

// Define initial store as empty.
const initialState = [];

function cityReducer(cities = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_CITY:
      return [...cities, payload];
    case RETRIEVE_CITIES:
      return payload;
    case UPDATE_CITIES:
      return cities.map((city) => {
        if (city.id === payload.id) {
          return {
            ...city,
            ...payload,
          };
        } else {
          return city;
        }
      });
    case DELETE_CITY:
      return cities.filter(({ id }) => id !== payload.id);
    case DELETE_ALL_CITIES:
      return [];
    default:
      return cities;
  }
}

export default cityReducer;

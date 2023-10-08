const { FILTER } = require('./actionTypes');

export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload.filter;

    default:
      return state;
  }
};

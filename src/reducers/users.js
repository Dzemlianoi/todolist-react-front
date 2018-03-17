'use strict';

const initialState = {
  user: 'Unknown User'
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PETYA':
      return {
        user: 'petya',
      }
  }
  return state;
}

module.exports = users

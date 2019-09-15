import * as types from './types'

const initialState = {

  counter: 0,

}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.UPDATE_COUNT:
      return {
        ...state,
        counter: action.content,
    }

  }
  return state;

}

export default reducer;

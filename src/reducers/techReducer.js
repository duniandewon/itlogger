import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING
} from '../actions/types';

const initialState = {
  techs: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      };

    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

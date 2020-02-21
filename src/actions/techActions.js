import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING
} from './types';

/** Get techs */
export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response
    });
  }
};

/** Set loading */
export const setLoading = () => ({
  type: SET_LOADING
});

const TOKEN_SUCCESS = 'TOKEN_SUCCESS';
const TOKEN_FAIL = 'TOKEN_FAIL';

export const fetchTokenSuccess = (payload) => ({
  type: TOKEN_SUCCESS,
  payload,
});

export const fetchTokenFail = (payload) => ({
  type: TOKEN_FAIL,
  payload,
});

export const fetchTokenThunk = () => async (dispatch) => {
  try {
    const fetchApi = await fetch('https://opentdb.com/api_token.php?command=request');
    const json = await fetchApi.json();
    const { token } = json;
    return dispatch(fetchTokenSuccess(token));
  } catch (error) {
    return dispatch(fetchTokenFail(error));
  }
};
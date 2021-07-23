import * as actions from '../actions/userActions';

export const initialState = {
  username: '',
  token: '',
  expiration: null,
  loggedIn: false,
  loggingIn: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.USER_LOGIN:
      return { ...state, loggingIn: true };
    case actions.USER_LOGIN_SUCCESS:
      return { username: action.payload.UserName, token: action.payload.Token, loggingIn: false, loggedIn: true, hasErrors: false };
    case actions.USER_LOGIN_FAILURE:
      return { ...state, loggingIn: false, loggedIn: false, hasErrors: true };
    default:
      return state;
  }
}

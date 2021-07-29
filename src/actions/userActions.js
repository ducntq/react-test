export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'

// Create Redux action creators that return an action
export const userLogin = () => ({
  type: USER_LOGIN,
});

export const userLoginSuccess = (loginInfo) => ({
  type: USER_LOGIN_SUCCESS,
  payload: loginInfo,
});

export const userLoginFailure = () => ({
  type: USER_LOGIN_FAILURE,
});

export function login(username, password) {
  return async (dispatch) => {
    dispatch(userLogin())
    try {
      const opts = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ username: username, password: password })
      };
      const response = await fetch(`${process.env.REACT_APP_API_URL}/Auth/Login`, opts);
      const data = await response.json()
      if (data.success) {
        localStorage.setItem('user', {username: data.userName, token: data.token})
        dispatch(userLoginSuccess(data))
      }
      else dispatch(userLoginFailure())
    } catch (error) {
      dispatch(userLoginFailure())
    }
  };
}

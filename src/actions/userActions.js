export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'

// Create Redux action creators that return an action
export const userLogin = () => ({
  type: USER_LOGIN,
})

export const userLoginSuccess = (loginInfo) => ({
  type: USER_LOGIN_SUCCESS,
  payload: loginInfo,
})

export const userLoginFailure = () => ({
  type: USER_LOGIN_FAILURE,
})

export function login(username, password) {
  return async (dispatch) => {
    dispatch(getPosts())

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}

// import { WorkActionTypes } from './work.action';

type AuthState = {
  logined: boolean,
};

export const initialState: AuthState = {
  logined: false,
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    // case WorkActionTypes.REQUEST_ON_WORK.SUCCESS:
    //   return {
    //     ...state,
    //     isOnWork: true,
    //   };

    default:
      return state;
  }
};

export default authReducer;

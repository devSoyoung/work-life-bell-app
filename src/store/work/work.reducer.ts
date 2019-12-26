import { WorkActionTypes } from './work.action';

type WorkState = {
  isOnWork: boolean,
};

export const initialState: WorkState = {
  isOnWork: false,
};

const workReducer = (state = initialState, action) => {
  switch(action.type) {
    case WorkActionTypes.REQUEST_ON_WORK.SUCCESS:
      return {
        ...state,
        isOnWork: true,
      };

    default:
      return state;
  }
};

export default workReducer;

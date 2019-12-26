import {
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from '../../utils/actionHelper';

export const WorkActionTypes = {
  REQUEST_ON_WORK: makeAsyncActionTypes('REQUEST_ON_WORK'),
  REQUEST_OFF_WORK: makeAsyncActionTypes('REQUEST_OFF_WORK'),
};

export const WorkActionCreators = {
  requestOnWork: makeAsyncActionCreator(WorkActionTypes.REQUEST_ON_WORK),
  requestOffWork: makeAsyncActionCreator(WorkActionTypes.REQUEST_OFF_WORK),
};

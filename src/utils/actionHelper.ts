const INDEX = 'INDEX' as const;
const REQUEST = 'REQUEST' as const;
const SUCCESS = 'SUCCESS' as const;
const FAILURE = 'FAILURE' as const;

type AsyncActionType = {
  BASE?: string,
  INDEX?: string,
  REQUEST?: string,
  SUCCESS?: string,
  FAILURE?: string,
};

export function makeAsyncActionTypes(base: string) {
  const asyncActionTypes: AsyncActionType = [INDEX, REQUEST, SUCCESS, FAILURE].reduce(
    (acc, type) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    {},
  );
  asyncActionTypes.BASE = base;
  return asyncActionTypes;
}

export function makeActionCreator(actionType: string): Function {
  return payload => ({ type: actionType, payload });
}

export function makeAsyncActionCreator(action): Function {
  const actionCreator:Function = makeActionCreator(action.INDEX);
  actionCreator.request = makeActionCreator(action.REQUEST);
  actionCreator.success = makeActionCreator(action.SUCCESS);
  actionCreator.failure = makeActionCreator(action.FAILURE);
  return actionCreator;
}

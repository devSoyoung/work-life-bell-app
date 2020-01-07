export function makeActionCreator(actionType: string): Function {
  return payload => ({ type: actionType, payload });
}

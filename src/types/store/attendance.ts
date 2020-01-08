import WorkState from '../workState';

type AttendanceStateType = {
  workState: WorkState,    // WorkState[BEFORE_WORK, ON_WORK, OFF_WORK]
  isRequestingTodayLog: boolean,
  isRequestingOnwork: boolean,
  onWorkDateTime: string,
  offWorkDateTime: string,
};

export default AttendanceStateType;

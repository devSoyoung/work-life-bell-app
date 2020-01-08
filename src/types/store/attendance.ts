import WorkState from '../workState';

type AttendanceStateType = {
  workState: WorkState,    // WorkState[BEFORE_WORK, ON_WORK, OFF_WORK]
  isRequestingTodayLog: boolean,
  isRequestingOnwork: boolean,
  isRequestingOffwork: boolean,
  onWorkDateTime: string,
  offWorkDateTime: string,
  workTime: number[],
};

export default AttendanceStateType;

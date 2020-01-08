import WorkState from '../workState';
import * as moment from 'moment';

type AttendanceStateType = {
  workState: WorkState,    // WorkState[BEFORE_WORK, ON_WORK, OFF_WORK]
  isRequestingTodayLog: boolean,
  isRequestingOnwork: boolean,
  onWorkDateTime: string,
  offWorkDateTime: string,
  workTime: number[],
};

export default AttendanceStateType;

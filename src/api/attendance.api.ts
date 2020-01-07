import RequestApi from '../utils/request';

const todayAttendanceLog = () => {
  return RequestApi.get('/attendance');
};

export default {
  todayAttendanceLog,
}

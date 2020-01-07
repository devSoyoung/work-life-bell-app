import RequestApi from '../utils/request';

const todayAttendanceLog = () => {
  return RequestApi.get('/attendance');
};

const setOnWork = () => {
  return RequestApi.post('/attendance/onwork');
};

// TODO: onWorkTimeRequest 파라미터로 받기
const setOnWorkUpdate = () => {
  return RequestApi.put('/attendance/onwork', {
    onWorkTimeRequest: '',
  });
};

const setOffWork = () => {
  return RequestApi.post('/attendance/offwork');
};

export default {
  todayAttendanceLog,
  setOnWork,
  setOnWorkUpdate,
  setOffWork,
}

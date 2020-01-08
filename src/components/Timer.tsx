import React, { useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, View } from 'react-native';
import moment from 'moment';

import StateType from '../types/store';
import { padNumber } from '../utils/timeCalculator';
import {AttendanceActionCreators} from "../store/attendance/attendance.action";

// state : 출근전, 출근, 퇴근
type TimerProps = {
  onWorkDateTime: string,
  offWorkDateTime: string,
  workTime: number[],
  addWorkTime: Function,
};

function Timer({ onWorkDateTime, offWorkDateTime, workTime, addWorkTime }: TimerProps) {
  // const hours = useMemo(() => workTime ? workTime.hours() : 0, [workTime]);
  // const minutes = useMemo(() => workTime ? workTime.minutes() : 0, [workTime]);
  // const seconds = useMemo(() => workTime ? workTime.seconds() : 0, [workTime]);

  const [hours, minutes, seconds] = workTime;

  useEffect(() => {
    let interval;
    if (onWorkDateTime && !offWorkDateTime) {
      interval = setInterval(() => {
        addWorkTime();
      }, 1000);
    }

    return () => {
      console.log('clearInterval called');
      clearInterval(interval);
    };
  }, [onWorkDateTime, offWorkDateTime]);

  return (
    <View style={styles.container}>
      <View style={styles.todayLogContainer}>
        <Text>출근 시간 : {onWorkDateTime || '출근 전 입니다 :)'}</Text>
        <Text>퇴근 시간 : {offWorkDateTime || '퇴근 전 입니다 :('}</Text>
      </View>

      <Text style={styles.subtitle}>오늘 일한 시간</Text>
      <Text style={styles.timer}>
        {padNumber(hours, 2)} : {padNumber(minutes, 2)} : {padNumber(seconds, 2)}
      </Text>
    </View>
  );
}

const mapStateToProps = (state: StateType) => ({
  onWorkDateTime: state.attendance.onWorkDateTime,
  offWorkDateTime: state.attendance.offWorkDateTime,
  workTime: state.attendance.workTime,
});

const mapDispatchToProps = dispatch => ({
  addWorkTime: () => dispatch(AttendanceActionCreators.addWorkTime()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Timer);

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  todayLogContainer: {
    marginLeft: 50,
  },
  subtitle: {
    fontSize: 25,
    textAlign: 'center',
  },
  timer: {
    fontSize: 55,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

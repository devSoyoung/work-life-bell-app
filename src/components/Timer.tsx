import React from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, View } from 'react-native';
import moment from 'moment';

import StateType from '../types/store';
import { calculateWorkTime, padNumber } from '../utils/timeCalculator';

// state : 출근전, 출근, 퇴근
type TimerProps = {
  onWorkDateTime: string,
  offWorkDateTime: string,
};

function Timer({ onWorkDateTime, offWorkDateTime }: TimerProps) {
  const workingTime = moment(calculateWorkTime(onWorkDateTime, offWorkDateTime).join(":"), "HH:mm:ss");

  return (
    <View style={styles.container}>
      <View style={styles.todayLogContainer}>
        <Text>출근 시간 : {onWorkDateTime || '출근 전 입니다 :)'}</Text>
        <Text>퇴근 시간 : {offWorkDateTime || '퇴근 전 입니다 :('}</Text>
      </View>

      <Text style={styles.subtitle}>오늘 일한 시간</Text>
      <Text style={styles.timer}>
        {padNumber(workingTime.hour() || 0, 2)} : {padNumber(workingTime.minutes() || 0, 2)} : {padNumber(workingTime.seconds() || 0, 2)}
      </Text>
    </View>
  );
}

const mapStateToProps = (state: StateType) => ({
  onWorkDateTime: state.attendance.onWorkDateTime,
  offWorkDateTime: state.attendance.offWorkDateTime,
});

const mapDispatchToProps = dispatch => ({

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

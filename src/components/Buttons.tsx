import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import { AttendanceActionCreators } from '../store/attendance/attendance.action';

import StateType from '../types/store';
import WorkState from '../types/workState';

type ButtonProps = {
  workState: WorkState,
  setOnwork: Function,
  setOffwork: Function,
};

function Buttons({ workState, setOnwork, setOffwork }: ButtonProps) {
  const disableOnwork = (workState !== WorkState.BEFORE_WORK);
  const disableOffwork = (workState !== WorkState.ON_WORK);

  const handlePressOnwork = () => {
    setOnwork();
  };

  const handlePressOffwork = () => {
    setOffwork();
  };

  return (
    <View style={styles.buttonArea}>
      <Button
        style={styles.button} primary
        disabled={disableOnwork}
        onPress={handlePressOnwork}
      >
        <Text style={styles.buttonText}>출근</Text>
      </Button>
      <Button
        style={styles.button} danger
        disabled={disableOffwork}
        onPress={handlePressOffwork}
      >
        <Text style={styles.buttonText}>퇴근</Text>
      </Button>
      <Button style={styles.button} success>
        <Text style={styles.buttonText}>정정</Text>
      </Button>
    </View>
  );
}

const mapStateToProps = (state: StateType) => ({
  workState: state.attendance.workState,
});

const mapDispatchToProps = dispatch => ({
  setOnwork: () => dispatch(AttendanceActionCreators.setOnwork()),
  setOffwork: () => dispatch(AttendanceActionCreators.setOffwork()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Buttons);

const styles = StyleSheet.create({
  buttonArea: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    margin: 5,
    marginBottom: 10,
    width: 90,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    // fontWeight: 'bold',
  },
});

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavigationStackProp } from 'react-navigation-stack';
import { Container, Root } from 'native-base';

import {
  AttendanceActionTypes,
  AttendanceActionCreators,
} from '../store/attendance/attendance.action';

import AppHeader from '../layouts/AppHeader';

import Buttons from '../components/Buttons';
import Timer from '../components/Timer';
import Today from '../components/Today';

type MainPageProps = {
  navigation: NavigationStackProp,
  login: boolean,
  fetchTodayLog: Function,
};

function MainPage({ navigation, login, fetchTodayLog }: MainPageProps) {
  if (!login) {
    navigation.navigate('Login');
  }

  useEffect(() => {
    if (login) {
      fetchTodayLog();
    }
  }, [login]);

  return (
    <Root>
      <AppHeader />
      <Container>
        <Today />
        <Timer />
        <Buttons />
      </Container>
    </Root>
  );
}

const mapStateToProps = state => ({
  login: state.account.login,
});

const mapDispatchToProps = dispatch => ({
  fetchTodayLog: () => dispatch(AttendanceActionCreators.fetchTodayLog()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

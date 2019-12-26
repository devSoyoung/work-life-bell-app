import React from 'react';
import { connect } from 'react-redux';
import { Container, Root } from 'native-base';

import AppHeader from '../layouts/AppHeader';

import Buttons from '../components/Buttons';
import Timer from '../components/Timer';
import Today from '../components/Today';

function MainPage({ navigation, logined }) {
  if (!logined) {
    navigation.navigate('Login');
  }

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
  logined: state.auth.logined
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

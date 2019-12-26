import React from 'react';
import { connect } from 'react-redux';
import { NavigationStackProp } from 'react-navigation-stack';
import { Container, Root } from 'native-base';

import AppHeader from '../layouts/AppHeader';

import Buttons from '../components/Buttons';
import Timer from '../components/Timer';
import Today from '../components/Today';

type MainPageProps = {
  navigation: NavigationStackProp,
  login: boolean,
};

function MainPage({ navigation, login }: MainPageProps) {
  if (!login) {
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
  login: state.account.login
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

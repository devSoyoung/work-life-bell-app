import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Root } from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import configureStore from './src/store/configureStore';

import PaddingHeader from './src/layouts/PaddingHeader';

import MainPage from './src/pages/MainPage';
import JoinPage from './src/pages/JoinPage';
import LoginPage from './src/pages/LoginPage';

import { initialState } from './src/store/createRootReducer';

const { store, persistor } = configureStore(initialState);

const MainNavigator = createStackNavigator({
  Home: {
    screen: MainPage,
    navigationOptions: {
      header: null,
    }
  },
  Login: {
    screen: LoginPage,
    navigationOptions: {
      header: <PaddingHeader />,
    }
  },
  Join: {
    screen: JoinPage,
    navigationOptions: {
      header: <PaddingHeader />,
    }
  },
}, {
  initialRouteName: 'Home',
});

const Navigation = createAppContainer(MainNavigator);

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async function() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
      });
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <Root>
        <AppLoading />
      </Root>
    );
  }

  return (
    <Provider store={store}>
      <Root>
        <Navigation />
      </Root>
    </Provider>
  );
}

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content, Container, Root } from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import AppHeader from './components/AppHeader';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
      setLoading(false);
    }
    loadFont();
  }, []);

  if (loading) {
    return (
      <Root>
        <AppLoading />
      </Root>
    );
  }

  return (
    <Container>
      <AppHeader />
      <Content>
        <Text>Hello, World!</Text>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

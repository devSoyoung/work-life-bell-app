import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Title } from 'native-base';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function AppHeader() {
  return (
    <Container style={styles.header}>
      <Header>
        <Body>
          <Title>OFF THE WORK : 출근 기록하기</Title>
        </Body>
      </Header>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
  },
});


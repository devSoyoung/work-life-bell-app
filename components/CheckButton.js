import React from 'react';
// import { StyleSheet } from 'react-native';
import { Container, Button } from 'native-base';

export default function CheckButton() {
  return (
    <Container>
      <Button>출근 기록하기</Button>
      <Button>퇴근 기록하기</Button>
    </Container>
  );
};

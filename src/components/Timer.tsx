import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container } from 'native-base';

// state : 출근전, 출근, 퇴근
export default function Timer() {
  return (
    <Container>
      <Text style={styles.subtitle}>오늘 일한 시간</Text>
      <Text style={styles.timer}>00 : 00 : 00</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
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

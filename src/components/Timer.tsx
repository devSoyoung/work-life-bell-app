import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// state : 출근전, 출근, 퇴근
export default function Timer() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>오늘 일한 시간</Text>
      <Text style={styles.timer}>00 : 00 : 00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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

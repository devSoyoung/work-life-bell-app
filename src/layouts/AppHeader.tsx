import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function AppHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>work life bell</Text>
      <Text style={styles.subTitle}>출퇴근 기록하기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: getStatusBarHeight(),
    // height: 54 + getStatusBarHeight(),
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 30,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 30,
  }
});


import React from 'react';
import { StyleSheet, Text } from 'react-native';

const week: string[] = ['일', '월', '화', '수', '목', '금', '토'];

function getDayColor(day: string) :string {
  if (day === '일') {
    return 'sundayColor';
  } else if (day === '토') {
    return 'saturdayColor';
  }
  return '';
}

export default function Today() {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = week[today.getDay()];

  return (
    <Text style={styles.timeInfo}>
      오늘은&nbsp;
      <Text style={styles.emphasize}>
        {year}년 {month}월 {date}일&nbsp;
        <Text style={styles[getDayColor(day)]}>
          {day}요일
        </Text>
      </Text>
      &nbsp;입니다.
    </Text>
  );
};

const styles = StyleSheet.create({
  timeInfo: {
    fontSize: 17,
    textAlign: 'center',
  },
  emphasize: {
    fontWeight: 'bold',
  },
  saturdayColor: {
    color: '#4F86C6',
  },
  sundayColor: {
    color: '#E71D36',
  },
});

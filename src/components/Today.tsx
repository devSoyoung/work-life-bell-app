import React from 'react';
import { Text } from 'react-native';

const week: string[] = ['일', '월', '화', '수', '목', '금', '토'];

export default function Today() {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = week[today.getDay()];

  return (
    <Text>오늘은 {year}년 {month}월 {date}일 {day}요일입니다.</Text>
  );
};

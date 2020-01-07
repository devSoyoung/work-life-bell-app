import moment from 'moment';

export function calculateWorkTime(onWorkDateTime: string, offWorkDateTime: string): number[] {
  const onWorkMoment = moment(onWorkDateTime);
  if (offWorkDateTime) {
    const offWorkMoment = moment(offWorkDateTime);
    return getTimeFromDiff(offWorkMoment.diff(onWorkMoment));
  }

  const currentMoment = moment(new Date());
  return getTimeFromDiff(currentMoment.diff(onWorkMoment));
}

function getTimeFromDiff(diff: number): number[] {
  const diffMoment = moment.duration(diff);
  return [Math.floor(diffMoment.asHours()), diffMoment.minutes(), diffMoment.seconds()];
}

export function padNumber(num: number, width: number) {
  const n: string = num + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

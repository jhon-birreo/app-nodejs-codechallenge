import { DateTime } from 'luxon';

export const getCurrentDateTimeZone = () => {
  return DateTime.now()
    .setZone(process.env.TIME_ZONE || 'America/Lima')
    .toJSDate();
};

export const convertDateToString = (date: Date | string) => {
  if (!date) return '';

  const dateTime = DateTime.fromJSDate(date, {
    zone: 'America/Lima',
  });

  if (!dateTime.isValid) {
    console.warn('Invalid date:', date);
    return '';
  }

  return dateTime.toFormat('yyyy-MM-dd HH:mm:ss');
};

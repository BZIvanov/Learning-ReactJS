export const useIsItTimeRange = ({
  startDateRange = '2024-02-17',
  endDateRange = '2024-02-19',
} = {}) => {
  const currentDate = new Date();

  const timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;

  const startDateTime = new Date(startDateRange).getTime();
  const startDate = new Date(startDateTime + timezoneOffset);
  const endDateTime = new Date(endDateRange).getTime();
  const endDate = new Date(endDateTime + timezoneOffset);

  return currentDate >= startDate && currentDate <= endDate;
};

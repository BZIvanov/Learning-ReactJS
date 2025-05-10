interface TimeRangeParams {
  startDateRange: string;
  endDateRange: string;
}

export const useIsItTimeRange = ({
  startDateRange,
  endDateRange,
}: TimeRangeParams): boolean => {
  const currentDate = new Date();

  const startDate = new Date(startDateRange);
  const endDate = new Date(endDateRange);

  return currentDate >= startDate && currentDate <= endDate;
};

export const formatDateInKST = (date: Date | null, startDate: boolean = false) => {
  if (!date) return null;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const time = startDate ? '00:00:00' : '23:59:59';
  const formattedDateString = `${year}-${month}-${day}T${time}`;
  return formattedDateString;
};

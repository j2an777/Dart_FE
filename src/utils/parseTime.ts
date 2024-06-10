const parseTime = (value: Date) => {
  const hours = value.getUTCHours().toString().padStart(2, '0');
  const minutes = value.getUTCMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
};

export default parseTime;

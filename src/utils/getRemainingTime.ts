const getRemainingTime = ({
  startDate,
  endDate,
}: {
  startDate?: Date;
  endDate: Date;
}) => {
  // 시작과 종료 날짜를 밀리초로 변환
  const startMs =
    startDate && startDate?.getTime() > new Date().getTime()
      ? startDate.getTime()
      : new Date().getTime();

  const endMs = endDate.getTime();
  // 남은 시간을 밀리초로 계산
  const remainingTime = endMs - startMs;

  // 남은 시간 반환
  return remainingTime / 1000;
};

export default getRemainingTime;

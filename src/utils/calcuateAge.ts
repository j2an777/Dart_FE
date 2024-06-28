export const calculateAge = (birthday: string | Date | undefined) => {
    if (!birthday || birthday.toString() === '1997-01-07') {
      return '정보 없음';
    }
  
    const birthdayDate = new Date(birthday);
    const today = new Date();
  
    let age = today.getFullYear() - birthdayDate.getFullYear();
  
    // 생일이 아직 지나지 않았으면 한 살을 더 빼줍니다.
    const monthDifference = today.getMonth() - birthdayDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdayDate.getDate())) {
      age--;
    }
  
    return age.toString();
  };
  
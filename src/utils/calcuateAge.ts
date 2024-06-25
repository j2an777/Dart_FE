export const calculateAge = (birthday: string) => {
    const birthdayDate = new Date(birthday);
    const today = new Date();
    const age = today.getFullYear() - birthdayDate.getFullYear() + 1;

    return age;
};

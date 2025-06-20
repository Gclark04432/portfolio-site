export const getYearsExperience = () => {
  let years = new Date().getFullYear() - 2020;
  const currentMonth = new Date().getMonth();

  if (currentMonth < 4) years -= 1;

  return years;
};

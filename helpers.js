export const formatDate = dateString => {
  if (!dateString) return null;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const dateObject = new Date(dateString);
  return `${
    monthNames[dateObject.getMonth()]
  } ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
};

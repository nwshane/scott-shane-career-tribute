import { uniq } from "lodash";

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

export const getSections = articles =>
  uniq(Object.values(articles).map(article => article.section)).filter(
    x => !!x
  );

export const getPreviousSectionName = (sections, sectionName) =>
  sections[sections.findIndex(name => name === sectionName) - 1];

export const urlify = str => str.replace(/\s/g, "-").toLowerCase();

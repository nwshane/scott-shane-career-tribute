const lodash = require("lodash");
const { uniq } = lodash;

const articles = require("./sheetData/articles");

const formatDate = dateString => {
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

const getSections = () =>
  uniq(Object.values(articles).map(article => article.section))
    .filter(x => !!x)
    .concat("Final Days of Glory");

const getPreviousSectionName = (sections, sectionName) =>
  sections[sections.findIndex(name => name === sectionName) - 1];

const getNextSectionName = (sections, sectionName) =>
  sections[sections.findIndex(name => name === sectionName) + 1];

const urlify = str => str.replace(/\s/g, "-").toLowerCase();

module.exports = {
  formatDate,
  getSections,
  getPreviousSectionName,
  getNextSectionName,
  urlify
};

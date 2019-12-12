const helpers = require("./helpers");
const { getSections, urlify } = helpers;

module.exports = {
  exportTrailingSlash: false,

  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" }
    };

    const sections = getSections();

    sections.forEach(section => {
      paths[`/${urlify(section)}`] = {
        page: "/[section]",
        query: {
          section: urlify(section)
        }
      };
    });

    return paths;
  },

  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
};

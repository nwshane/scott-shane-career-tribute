const fs = require("fs");
const helpers = require("./helpers");
const { getSections, urlify } = helpers;

module.exports = {
  exportTrailingSlash: false,

  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" },
      "/letter-from-the-publisher": {
        page: "/letter-from-the-publisher",
        query: { section: "letter-from-the-publisher" }
      }
    };

    const sections = getSections();

    sections.forEach(section => {
      const sectionPath = urlify(section);

      const sectionPageAlreadyExists = fs.existsSync(
        `./pages/${sectionPath}.js`
      );

      if (!sectionPageAlreadyExists) {
        paths[`/${sectionPath}`] = {
          page: "/[section]",
          query: {
            section: sectionPath
          }
        };
      }
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

module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
  },
  "parser": "babel-eslint",
  "rules":{
    "react/forbid-prop-types": [true, { "forbid": ['any', 'array'], checkContextTypes: false, checkChildContextTypes: false }]
  }
};
// https://github.com/airbnb/javascript/blob/8cf2c70a4164ba2dad9a79e7ac9021d32a406487/packages/eslint-config-airbnb-base/rules/variables.js

module.exports = {
  rules: {
    // disallow use of variables before they are defined
    //'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],}
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
  }
};
module.exports = {
  "extends": ["stylelint-config-standard-scss", "stylelint-config-recommended-scss"],
  "plugins": [
    "stylelint-scss",
    "stylelint-order",
  ],
  "rules": { // https://stylelint.io/user-guide/rules/
    "at-rule-empty-line-before": ["always", {
      "except": ["after-same-name", "first-nested"],
      "ignoreAtRules": ["include", "extend"]
    }],
    "color-named": "never",
    "custom-property-empty-line-before": ["always", {
      "except": [
        "after-custom-property",
        "first-nested"
      ]
    }],
    "declaration-empty-line-before": ["always", {
      "except": [
        "after-declaration",
        "first-nested"
      ]
    }],
    "declaration-property-value-disallowed-list": [
      {
        "background-image": [/url\(/],
        "background": [/url\(/],
        "/.*/": [/rgba?/, /hsa/, /#(?:[0-9a-fA-F]{3}){1,2}/],
      },
      {
        "message": "Please use @include theme() mixin for colors.\nImages should be referenced in JSX."
      }
    ],
    "declaration-property-value-no-unknown": true,
    "font-weight-notation": "numeric",
    "max-nesting-depth": [3, {
      "ignore": ["pseudo-classes"]
    }],
    "no-descending-specificity": null,
    "no-empty-source": true,
    "rule-empty-line-before": ["always-multi-line", {
      "except": ["after-single-line-comment", "first-nested"]
    }],
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
    "selector-pseudo-class-no-unknown": [true, {
      "ignorePseudoClasses": ["global", "local"],
    }],

    // order plugin
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "at-variables",
      "at-rules",
      "declarations",
      "rules",
    ],
    "order/properties-alphabetical-order": true,

    // scss plugin
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-mixin-pattern": /^[a-z]+[A-Z0-9]?[a-z0-9]*[A-Za-z0-9]*$/, // lowerCamelCase
    "scss/dollar-variable-pattern": /^[a-z]+[A-Z0-9]?[a-z0-9]*[A-Za-z0-9]*$/, // lowerCamelCase
    "scss/percent-placeholder-pattern": /^[a-z]+[A-Z0-9][a-z0-9]+[A-Za-z0-9]*$/, // lowerCamelCase
  }
};

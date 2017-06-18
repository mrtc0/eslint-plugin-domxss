"use strict";

var rule = require("../../../lib/rules/jquery-no-replaceWith.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("jquery-no-replaceWith", rule, {

    valid: [
      'replaceWith()',
    ],

    invalid: [
        {
            code: '$("div").replaceWith("<script>").appendTo(document.body)',
            errors: [{
                message: "$.replaceWith is potentially dangerous",
                type: "CallExpression"
            }]
        },
    ]
});

"use strict";

var rule = require("../../../lib/rules/jquery-no-wrap.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("jquery-no-wrap", rule, {

    valid: [
      'wrap()',
    ],

    invalid: [
        {
            code: '$("div").wrap("<script>").appendTo(document.body)',
            errors: [{
                message: "$.wrap is potentially dangerous",
                type: "CallExpression"
            }]
        },
    ]
});

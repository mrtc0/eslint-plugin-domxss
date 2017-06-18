"use strict";

var rule = require("../../../lib/rules/jquery-no-after.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("jquery-no-after", rule, {

    valid: [
      'after()',
    ],

    invalid: [
        {
            code: '$("div").after("<script>").appendTo(document.body)',
            errors: [{
                message: "$.after is potentially dangerous",
                type: "CallExpression"
            }]
        },
    ]
});

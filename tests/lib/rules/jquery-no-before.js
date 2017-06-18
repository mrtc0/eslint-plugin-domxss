"use strict";

var rule = require("../../../lib/rules/jquery-no-before.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("jquery-no-before", rule, {

    valid: [
      'before()',
    ],

    invalid: [
        {
            code: '$("div").before("<script>").appendTo(document.body)',
            errors: [{
                message: "$.before is potentially dangerous",
                type: "CallExpression"
            }]
        },
    ]
});

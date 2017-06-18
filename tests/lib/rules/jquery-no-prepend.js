"use strict";

var rule = require("../../../lib/rules/jquery-no-prepend.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("jquery-no-prepend", rule, {

    valid: [
      'prepend()',
    ],

    invalid: [
        {
            code: '$("div").prepend("<script>")',
            errors: [{
                message: "$.prepend is potentially dangerous",
                type: "CallExpression"
            }]
        },
    ]
});

"use strict";

var rule = require("../../../lib/rules/jquery-no-appendTo.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("jquery-unsafe", rule, {

    valid: [
      'appendTo()',
    ],

    invalid: [
        {
            code: '$("div").appendTo("<script>")',
            errors: [{
                message: "$.appendTo is potentially dangerous",
                type: "CallExpression"
            }]
        },
    ]
});

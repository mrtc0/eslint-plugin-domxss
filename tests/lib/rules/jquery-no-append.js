"use strict";

var rule = require("../../../lib/rules/jquery-no-append.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("jquery-no-append", rule, {

    valid: [
      'append()',
    ],

    invalid: [
        {
            code: '$("div").append("<script>")',
            errors: [{
                message: "$.append is potentially dangerous",
                type: "CallExpression"
            }]
        },
    ]
});

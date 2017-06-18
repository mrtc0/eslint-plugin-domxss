"use strict";

var rule = require("../../../lib/rules/eval"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("eval", rule, {

    valid: [
        "eval"
    ],

    invalid: [
        {
            code: "eval(input)",
            errors: [{
                message: "[DOM Based XSS][eval] eval",
                type: "ExpressionStatement"
            }]
        },
    ]
});

"use strict";

var rule = require("../../../lib/rules/jquery-no-html.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("jquery-no-html", rule, {

    valid: [
      'html()',
    ],

    invalid: [
        {
            code: '$("div").html("<script>")',
            errors: [{
                message: "$.html is potentially dangerous",
                type: "CallExpression"
            }]
        },
    ]
});

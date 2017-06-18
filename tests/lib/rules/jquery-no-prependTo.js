"use strict";

var rule = require("../../../lib/rules/jquery-no-prependTo.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("jquery-no-prependTo", rule, {

    valid: [
      'prependTo()',
    ],

    invalid: [
        {
            code: '$("div").prependTo("<script>")',
            errors: [{
                message: "$.prependTo is potentially dangerous",
                type: "CallExpression"
            }]
        },
    ]
});

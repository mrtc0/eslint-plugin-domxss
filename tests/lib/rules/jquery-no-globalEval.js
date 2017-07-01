"use strict";

var rule = require("../../../lib/rules/jquery-no-globalEval.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("jquery-no-globalEval", rule, {

    valid: [
      'globalEval()',
    ],

    invalid: [
        {
            code: '$("div").globalEval("<script>alert(1)</script>")',
            errors: [{
                message: "$.globalEval is potentially dangerous",
                type: "CallExpression"
            }]
        },
    ]
});

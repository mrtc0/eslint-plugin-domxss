"use strict";

var rule = require("../../../lib/rules/jquery-no-wrapAll.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("jquery-no-wrapAll", rule, {

    valid: [
      'wrapAll()',
    ],

    invalid: [
        {
            code: '$("div").wrapAll("<script>").appendTo(document.body)',
            errors: [{
                message: "$.wrapAll is potentially dangerous",
                type: "CallExpression"
            }]
        },
    ]
});

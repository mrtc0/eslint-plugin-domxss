"use strict";

var rule = require("../../../lib/rules/jquery-no-add.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("jquery-no-add", rule, {

    valid: [
      'add()',
    ],

    invalid: [
        {
            code: '$("div").add("<script>").appendTo(document.body)',
            errors: [{
                message: "$.add is potentially dangerous",
                type: "CallExpression"
            }]
        },
    ]
});

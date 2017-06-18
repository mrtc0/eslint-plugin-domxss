"use strict";

var rule = require("../../../lib/rules/innerhtml"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("innerHTML", rule, {

    valid: [
        "el.innerText('text')"
    ],

    invalid: [
        {
            code: "el.innerHTML = input",
            errors: [{
                message: "[DOM Based XSS][innerHTML] el.innerHTML",
                type: "ExpressionStatement"
            }]
        },
    ]
});

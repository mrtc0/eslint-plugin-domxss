"use strict";

var rule = require("../../../lib/rules/documentwrite"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("document.write", rule, {

    valid: [
        "document.write('text')"
    ],

    invalid: [
        {
            code: "document.write(x)",
            errors: [{
                message: "[DOM Based XSS][Identifier] document.write",
                type: "ExpressionStatement"
            }]
        },
        // {
        //     code: "document.write('text')",
        //     errors: [{
        //         message: "[DOM Based XSS][Literal] document.write",
        //         type: "ExpressionStatement"
        //     }]
        // },
        {
            code: "document.write('a' + input + 'b')",
            errors: [{
                message: "[DOM Based XSS][Identifier] document.write",
                type: "ExpressionStatement"
            }]
        }
    ]
});

"use strict";

module.exports = function(context) {

    return {
        "ExpressionStatement": function(node) {
            if(node.expression.type === 'CallExpression' &&
                node.expression.callee.type === "MemberExpression" &&
                node.expression.callee.object.name === "document" &&
                node.expression.callee.property.name === "write") {
                    // document.writeの引数チェック
                    node.expression.arguments.forEach(function(arg) {
                    // 引数が変数である
                    // ex: document.write(input)
                    if(arg.type === "Identifier") {
                        context.report(node, "[DOM Based XSS][Identifier] document.write")
                    }

                    // 引数がリテラル
                    // ex: document.write('text')
                    // if(arg.type === "Literal") {
                    //     context.report(node, "[DOM Based XSS][Literal] document.write")
                    // }

                    // 引数が式
                    // ex: document.write('a' + input + 'b')
                    if(arg.type === "BinaryExpression") {
                        if(JSON.stringify(arg).indexOf("Identifier") > -1) {
                            context.report(node, "[DOM Based XSS][Identifier] document.write")
                        }
                    }
                })
            }
        }
    };
};

module.exports.schema = [];

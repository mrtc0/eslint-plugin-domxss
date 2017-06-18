"use strict";

module.exports = function(context) {
  return {
    "ExpressionStatement": function(node) {
      if(node.expression.type === 'CallExpression' && 
          node.expression.callee.name === "eval") {
            context.report(node, "[DOM Based XSS][eval] eval")
      }
    }
  };
};

module.exports.schema = [];

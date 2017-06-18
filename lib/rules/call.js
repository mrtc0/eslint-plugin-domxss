"use strict";

module.exports = function(context) {
  return {
    "ExpressionStatement": function(node) {
      if(node.expression.type === 'AssignmentExpression' &&
        node.expression.left.property.name === "innerHTML") {
          context.report(node, "[DOM Based XSS][innerHTML] el.innerHTML")
        }
    }
  };
};

module.exports.schema = [];

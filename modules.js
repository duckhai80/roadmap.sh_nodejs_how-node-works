// console.log(arguments);
// console.log(require("module").wrapper);

//  module.exports
const CalculatorModuleExports = require("./test-module-1");
const calc1 = new CalculatorModuleExports();

console.log(calc1.add(2, 5));

//  exports
const CalculatorExports = require("./test-module-2");
const { add, multiply, divide } = CalculatorExports;

console.log(add(2, 5));

//  caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();

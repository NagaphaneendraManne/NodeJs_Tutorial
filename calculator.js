// const add = (a, b) => {
//   return a + b;
// };
// or
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
// module.exports = add; // Default exports
module.exports.add = add; //Named exports
//OR
exports.sub = sub;

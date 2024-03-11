"use strict";
function HOF(fn) {
    return fn();
}
const number = HOF(() => { return 787; });
console.log(number);

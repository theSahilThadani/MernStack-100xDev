"use strict";
var Key;
(function (Key) {
    Key[Key["Up"] = 0] = "Up";
    Key[Key["Down"] = 1] = "Down";
    Key[Key["Right"] = 2] = "Right";
    Key[Key["Left"] = 3] = "Left";
})(Key || (Key = {}));
function Keypressed(key) {
    console.log(key);
}
Keypressed(Key.Right);
var rescode;
(function (rescode) {
    rescode[rescode["Notfound"] = 404] = "Notfound";
    rescode[rescode["Sucsess"] = 200] = "Sucsess";
    rescode[rescode["Error"] = 500] = "Error";
})(rescode || (rescode = {}));

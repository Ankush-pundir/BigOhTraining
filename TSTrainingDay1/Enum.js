"use strict";
var Directions;
(function (Directions) {
    Directions["Up"] = "Up";
    Directions["Down"] = "Down";
    Directions["Left"] = "Left";
    Directions["Right"] = "Right";
})(Directions || (Directions = {}));
function getDirection(dir) {
    console.log(dir);
}
getDirection(Directions.Up);

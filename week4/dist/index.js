"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.get("/", function (req, res) {
    res.send("Hello world");
});
app.get("/contact", function (req, res) {
    res.send("Contact me - chandrasr.palle@gmail.com");
});
app.get("/test", function (req, res) {
    res.send({ name: "chandu" });
});
app.listen(3000, function () {
    console.log("Server started at : 3000");
});
//# sourceMappingURL=index.js.map
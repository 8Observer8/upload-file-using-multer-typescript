"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var multer = require("multer");
var path = require("path");
var App = /** @class */ (function () {
    function App() {
        var app = express();
        var indexDir = path.join(__dirname, "../public");
        app.use(express.static(indexDir));
        // app.use(multer({ dest: "uploads" }).single("filedata"));
        var upload = multer({ dest: "uploads" });
        // app.post("/upload", (req: express.Request, res: express.Response) =>
        app.post("/upload", upload.single("filedata"), function (req, res) {
            var fileData = req.file;
            console.log(fileData);
            if (!fileData) {
                res.send("Failed to load a file");
            }
            else {
                res.send("File uploaded");
            }
        });
        var port = process.env.PORT || 3000;
        console.log("Server listen on port: ", port);
        app.listen(port);
    }
    return App;
}());
new App();
//# sourceMappingURL=App.js.map
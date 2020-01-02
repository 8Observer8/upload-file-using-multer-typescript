import * as express from "express";
import * as multer from "multer";
import * as path from "path";

class App
{
    public constructor()
    {
        let app = express();
        let indexDir = path.join(__dirname, "../public");
        app.use(express.static(indexDir));
        // app.use(multer({ dest: "uploads" }).single("filedata"));
        let upload = multer({ dest: "uploads" });
        // app.post("/upload", (req: express.Request, res: express.Response) =>
        app.post("/upload", upload.single("filedata"), (req: express.Request, res: express.Response) =>
        {
            let fileData = req.file;
            console.log(fileData);
            if (!fileData)
            {
                res.send("Failed to load a file");
            }
            else
            {
                res.send("File uploaded");
            }
        });
        let port = process.env.PORT || 3000;
        console.log("Server listen on port: ", port);
        app.listen(port);
    }
}

new App();

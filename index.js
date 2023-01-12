const express = require("express");
const app = express();
const uploadFile = require("./multer/fileUpload");

app.use(express.json());

app.post("/recieveFile", uploadFile.uploadFile.single("file"), (req, res) => {
  console.log("running serveur 2");

  res.status(200).json({ message: "ok" });
});

app.listen(4000, () => {
  console.log(`Server Started at ${4000}`);
});

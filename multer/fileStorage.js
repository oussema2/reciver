const multer = require("multer");
const path = require("path");
exports.fileStorage = multer.diskStorage({
  destination: "filesRecived",
  filename: (req, file, cb) => {
    console.log(file);
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

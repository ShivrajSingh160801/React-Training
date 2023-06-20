import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "app/uploads/");
   },
   filename: function (req, file, cb) {
      let ext = path.extname(file.originalname);
      cb(null, Date.now() + ext);
   },
});

const Upload = multer({
   storage: storage,
   fileFilter: function (req, file, callback) {
      if (file.mimetype === "image/jpeg") {
         callback(null, true);
      } else {
         console.log("Only JPEG files are allowed.");
         callback(null, false);
      }
   },
   limits: {
      fileSize: 1024 * 1024 * 2,
   },
});

export default Upload;

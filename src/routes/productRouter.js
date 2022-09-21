const express = require("express");
const router = express.Router()
const productController = require("../controllers/productController")
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, path.join(__dirname,"../../public/img/imagenes-platos"))
    },
    filename:(req, file, cb) => {
        const newFileName = file.filename + Data.now() + "-" + path.extname(file.originalname)
        cb(null, newFileName)
    }
});

const upload = multer({ storage });

router.get("/list", productController.list);
router.get("/detail/:id", productController.detail);
router.get("/create", productController.create);
router.post("/create",upload.single("image") ,productController.store);
router.get("/edit/:id", productController.edit);
router.put("/edit/:id", productController.update);
router.delete("/delete/:id", productController.destroy);


module.exports = router

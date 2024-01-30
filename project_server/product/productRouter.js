const express = require("express");
const productDAO = require("./productDAO");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "public/upload/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post("/upload", upload.single("file1"), async (req, res, next) => {
  try {
    const data = {
      auction_price: req.body.auction_price,
      product_status: req.body.product_status,
      detail: req.body.detail,
      picture: req.file.filename,
    };

    // productDAO.bidding 함수를 호출하여 데이터를 MySQL의 auction 테이블에 저장
    productDAO.bidding(data, (resp) => {
      res.json(resp);
    });
  } catch (error) {
    console.error(error);
    res.json({ status: 500, message: "에러 발생" });
  }
});

router.post("/insert", async (req, res, next) => {
  const data = req.body;
  console.log("00", data);
  productDAO.bidding(data, (resp) => {
    res.json(resp);
  });
});

router.get("/detail/:id", function (req, res, next) {
  console.log("디테일 불러오기");
  const id = req.params.id;
  productDAO.detail({ product_id: id }, (resp) => {
    //productDAO.detail 함수의 매개변수로는 객체를 받도록 정의되어 있으니까 객체 안에 담아야함
    res.json(resp);
  });
});

module.exports = router;

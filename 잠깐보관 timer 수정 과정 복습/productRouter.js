const express = require("express");
const productDAO = require("./productDAO");
const multer = require("multer");
const path = require("path");
const { func } = require("prop-types");
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

router.post("/bidding/insert", async (req, res, next) => {
  console.log("0000000");

  //파일 업로드 처리하고.. 이 라인에서 에러가 발생하지 않으면 파일 업로드 성공
  const a1 = upload.single("file1");

  a1(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err);
      res.json({ status: 500, message: "error" });
    } else if (err) {
      console.log(err);
      res.json({ status: 500, message: "error" });
    } else {
      //에러가 없다면.. 나머지 데이터를 받는다..
      console.log("upload router....");
      const data = req.body;
      const obj = JSON.parse(data.sendData);

      console.log("sendData", obj);
      productDAO.bidding(obj, (resp) => {
        res.json(resp);
      });
    }
  });
});

// router.get("/detail/:id", function (req, res, next) {
//   console.log("디테일 불러오기");
//   const productId = req.params.id;
//   productDAO.detail({ product_id: productId }, (detailResp) => {
//     productDAO.timer(productId, (timerResp) => {
//       req.json({ detail: detailResp, timer: timerResp });
//     });
//   });
// });

router.get("/detail/:id", function (req, res, next) {
  //내가 왜 !!! 이 라우터를 http://localhost:8000 이런 식으로 작성했을까?
  console.log("디테일 불러오기");
  const id = req.params.id;
  productDAO.detail({ product_id: id }, (resp) => {
    //productDAO.detail 함수의 매개변수로는 객체를 받도록 정의되어 있으니까 객체 안에 담아야함
    res.json(resp);
  });
});

router.get("/timer/:id", function (req, res, next) {
  console.log("작성시간 가져오기");
  const productId = req.params.id;
  productDAO.timer(productId, (resp) => {
    res.json(resp);
  });
});

module.exports = router;

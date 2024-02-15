//폼데이터랑 사진까지 잘 전송되도록 수정함
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

router.post(
  "/bidding/insert",
  upload.single("file1"),
  //이 부분 빼먹지 말고
  async (req, res, next) => {
    try {
      // 파일 업로드 성공 여부 확인
      if (!req.file) {
        return res.json({ status: 500, message: "파일 업로드 실패" });
      }
      const data = req.body;
      const obj = JSON.parse(data.sendData);
      const filename = req.file.filename;
      const biddingData = { ...data, ...obj, filename };
      //스프레드 연산자 사용해서 객체의 속성을 biddingData에 넣기~!
      productDAO.bidding(biddingData, (resp) => {
        res.json(resp);
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: 500, message: "서버 에러" });
    }
  }
);

router.get("/detail/:id", function (req, res, next) {
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

router.post("/update/:id", function (req, res, next) {
  const productId = req.params.id;
  const data = req.body.product;
  console.log("게시글 수정하기", data);
  productDAO.update(productId, data, (resp) => {
    res.json(resp);
  });
}); //0202 추가 buy 페이지랑 연결을 해야됨

module.exports = router;

const express = require("express");
const productDAO = require("./productDAO");
const multer = require("multer");
const path = require("path");
const router = express.Router();

// router.get("/productList", function (req, res, next) {
//   console.log("상품 메인 불러오기");
//   productDAO.productList((resp) => {
//     res.json(resp);
//   });
// });
// 화면메인 부분 -준영님

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

//upload 엔드포인트에 대한 POST 요청 처리
router.post("/upload", (req, res, next) => {
  const pictureUpload = upload.single("file1"); //여기 file1을 front bidding이랑 맞춤

  pictureUpload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err);
      res.json({ status: 500, message: "error" });
    } else if (err) {
      console.log(err);
      res.json({ status: 500, message: "error" });
    } else {
      console.log("upload router....");
      const data = req.body;
      console.log("title", data.title);
      console.log("file", req.file.filename);
      res.json({ status: 200, message: "OK", data: req.file.filename });
    }
  });
});

router.get("/detail/:id", function (req, res, next) {
  console.log("디테일 불러오기");
  const id = req.params.id;
  productDAO.detail({ product_id: id }, (resp) => {
    //productDAO.detail 함수의 매개변수로는 객체를 받도록 정의되어 있으니까 객체 안에 담아야함
    res.json(resp);
  });
}); //콘솔 찍힘

router.post("/update", function (req, res, next) {
  console.log("게시글 수정하기");
  const data = req.body;
  productDAO.update(data, (resp) => {
    res.json(resp);
  });
});
//404

router.post("/bidding", (req, res, next) => {
  console.log("낙찰페이지 불러오기");
  const data = req.body;
  productDAO.bidding(data, (resp) => {
    res.json(resp);
  });
}); //404 이거는 찍히는데... 자료가.....

//낙찰테이블을 detail 페이지에서 불러오고 싶음..
router.get("/biddingTable/:id", function (req, res, next) {
  console.log("낙찰테이블 불러오기");
  const id = req.params.id;
  productDAO.detail({ product_id: id }, (detailResp) => {
    //{product_id:id} 매개변수 사용해서 디테일 정보 가져오고
    //productDAO 함수 비동기 콜백 함수에서 전달되는 인자가 detailResp
    if (detailResp.status === 200) {
      const detailData = detailResp.data[0]; //배열이겠지? 성공하면 detailResp.data에 디테일 정보 있을거..
      productDAO.biddingTable((biddingResp) => {
        //낙찰테이블 정보 가지고오고
        res.json({
          detail: detailData,
          biddingTable: biddingResp,
        });
      });
    } else {
      res.status(500).json({ status: 500, message: "테이블 붙여놓기 실패" });
    }
  });
});
//콘솔은 찍힘

//   productDAO.biddingTable((resp) => {
//     res.json(resp);
//   });
// });
//콘솔 찍힘. 라우터 수정해야할 것 같음... 동일 라우터는 안 됨. 디테일 페이지에서 보여주었으면 좋겠음

// router.get("/", function (req, res) {
//   res.send("products.ok");
// });

// router.get("/detail/:id", function (req, res) {
//   res.send("detail.ok");
// });

// router.get("/bidding", function (req, res) {
//   res.send("bidding.ok");
// });

//multer
// const storage = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "uploads/"); //파일은 uploads에 저장될거
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 },
// });
// const upload = multer({ storage: storage });
// router.get("/uploads", function (req, res) {
//   res.render("uploads.ejs");
// });
// router.post("/uploads", upload.single("file1"), (req, res) => {
//   console.log("사진 업로드");
//   res.send("ok");
// });

module.exports = router;

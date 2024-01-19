const express = require("express");
const router = express.Router();
const productDAO = require("./productDAO");

router.get("/", function (req, res) {
  res.send("products.ok");
});

router.get("/detail/:id", function (req, res) {
  res.send("detail.ok");
});

router.get("/bidding", function (req, res) {
  res.send("bidding.ok");
});

// router.get("/productList", function (req, res, next) {
//   console.log("loading...");
//   boardDAO.productList((resp) => {
//     res.json(resp);
//   });
// });

// router.get("/detail/:id", function (req, res, next) {
//   console.log("router...");
//   const id = req.params.id;
//   productDAO.board(id, (resp) => {
//     res.json(resp);
//   });
// });

// router.post("/bidding", (req, res, next) => {
//   console.log("insert router...");
//   const data = req.body;
//   boardDAO.insert(data, (resp) => {
//     res.json(resp);
//   });
// });

// router.get("/biddingTable", function (req, res, next) {
//   console.log("boardList loading...");
//   boardDAO.boardList((resp) => {
//     res.json(resp);
//   });
// });

// router.post("/update", function (req, res, next) {
//   console.log("update router...");
//   const data = req.body;
//   boardDAO.update(data, (resp) => {
//     res.json(resp);
//   });
// });

module.exports = router;

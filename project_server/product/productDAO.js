//데이터베이스와 상호작용
const getPool = require("../common/pool");

const sql = {
  detail: "select * from product where product_id = ?", //read
  update:
    "update product set master_price =?, content = ? where product_id = ?", //update
  bidding:
    "insert into product (auction_id, product_id, email, auction_price, picture, product_status, createAt) values (?,?,?,?,?,?,?)", //create
  biddingTable:
    "insert into auction (email, auction_price, product_status) values (?, ?, ?)",
  // create 입찰보드에서 입력한 내용이 상세페이지 내부에 있는 테이블에 들어가게끔 하려면... 일단 update가 아니라 insert??
  // biddingTable:
  //   "update auction set email =?, auction_price =?, product_status =? ", //update
};

const productDAO = {
  detail: async (item, callback) => {
    //item 매개변수로 조회하고자 하는 상품의 정보가 담긴 객체를 받음
    let conn = null;
    try {
      conn = await getPool().getConnection();
      const [resp] = await conn.query(sql.detail, [item.product_id]); //바인딩할 변수가 필요 sql 쿼리에서 사용하는 ?자리를 채워놓음
      callback({ status: 200, message: "ok", data: resp });
    } catch (error) {
      return { status: 500, message: "디테일 불러들이기 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },

  bidding: async (item, callback) => {
    let conn = null;
    try {
      conn = await getPool().getConnection();
      const [resp] = await conn.query(sql.bidding, [
        item.auction_id,
        item.product_id,
        item.email,
        item.auction_price,
        item.picture,
        item.product_status,
        item.createAt,
      ]);
      callback({ status: 200, message: "ok", data: resp });
    } catch (error) {
      return { status: 500, message: "입찰 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },

  biddingTable: async (item, callback) => {
    let conn = null;
    try {
      conn = await getPool().getConnection();
      const [resp] = await conn.query(sql.biddingTable, [
        item.email,
        item.auction_price,
        item.product_status,
      ]);
      callback({ status: 200, message: "ok", data: resp });
    } catch (error) {
      return { status: 500, message: "입찰 테이블 조회 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },

  update: async (item, callback) => {
    let conn = null;
    try {
      conn = await getPool().getConnection();
      const [resp] = await conn.query(sql.update, [
        item.master_price,
        item.content,
        item.product_id,
      ]);
      callback({ status: 200, message: "ok" });
    } catch (error) {
      return { status: 500, message: "게시글 수정 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
};

//multer
// DAO 파일 (예: productDAO.js)
const db = require("./db"); // 실제 DB 연결 코드

function insertProduct(title, email, picturePath /* ...other fields */) {
  const sql =
    "INSERT INTO product (title, email, picture, /* ...other fields */, createAt) VALUES (?, ?, ?, /* ...other values */, NOW())";

  return new Promise((resolve, reject) => {
    db.query(
      sql,
      [title, email, picturePath /* ...other values */],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}

module.exports = {
  insertProduct,
  // ... other functions
};

module.exports = productDAO;

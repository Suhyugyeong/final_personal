//여기 페이지에서 입찰하기 클릭하면 bidding
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";
// import Table from "./Table"; //

const Detail = () => {
  const navigate = useNavigate();
  const { product_id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    email: "",
    picture: "",
    master_price: "",
    auctuon_id: "",
    endtime: "",
    auction_status: "",
    isbn: "",
    content: "",
    cnt: "",
    createAt: "",
  });
  // const [auctionData, setAuctionData] = useState([]); //

  const getDetail = async () => {
    const resp = await axios.get(
      "http://localhost:8000/products/detail/" + product_id
    );
    setProduct(resp.data.data);
  };
  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <div className="product_image_area section_padding">
        <div className="container">
          <div className="row s_product_inner justify-content-between">
            <div className="col-lg-7 col-xl-7">
              <div className="product_slider_img">
                <img src="./bmicbook/book_image1.jpg" />
                {/* <div id="vertical">
                  <div data-thumb="img/product/single-product/book_img.jpg">
                    <img src="/front/src/product/component/bmicbook/book_image1.jpg" />
                  </div>
                  <div data-thumb="img/product/single-product/product_1.png">
                    <img src="/front/src/product/component/bmicbook/book_image1.jpg" />
                  </div>
                  <div data-thumb="img/product/single-product/product_1.png">
                    <img src="img/product/single-product/product_1.png" />
                  </div>
                  <div data-thumb="img/product/single-product/product_1.png">
                    <img src="img/product/single-product/product_1.png" />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-5 col-xl-4">
              <div className="s_product_text">
                <h3>{product.title}</h3> <br />
                <ul className="list">
                  <li>
                    <a href="#">
                      {" "}
                      <span>{product.isbn}</span> : In Stock
                      <span>{product.title}</span> : In Stock
                    </a>
                  </li>
                  <br />
                </ul>
                <p></p>
                <h3>{product.endtime}</h3>
                <br />
                <button
                  className="btn_3"
                  onClick={() => navigate("/products/bidding")}
                >
                  판매입찰하기
                  {/* 슬래시 없으면 상대경로라서 http://localhost:5173/products/detail/1/products/bidding 여기로 감.. */}
                </button>
                <br />
                <br />
                <button
                  className="btn_3"
                  onClick={() => navigate("/products/bidding")}
                >
                  즉시구매가 {product.master_price}
                  <br />
                  {/* 슬래시 없으면 상대경로라서 http://localhost:5173/products/detail/1/products/bidding 여기로 감.. */}
                </button>
                {/* <h2>{product.master_price}</h2> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <p>
          {product.content}
          <br />
          <br />
          <br />
        </p>
      </div>

      <section className="confirmation_part padding_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="confirmation_tittle">
                <span>입찰 현황을 확인하세요.</span>
              </div>
            </div>
            <div>
              {/* <Table auction={auctionData} /> */}
              {/*  */}
            </div>
            {/* <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">입찰자</th>
                  <th scope="col">입찰금액(원)</th>
                  <th scope="col">상품상태</th>
                </tr>
              </thead>
              <tbody>
              {product.data.map((auction)=>
                <tr key={auction.auction_id}>
                <td>{auction.auction_id}</td>
                <td>
                <Link to={"/products/detail" + product_id"}>
                </Link>
                </td>
                  <td>{auction.email}</td>
                  <td> {auction.auction_price}</td>
                  <td> {auction.actuion_status}</td>
                </tr>
               ))}
              </tbody>
            </table> */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-warning" type="button">
                {/* 여기 onClick하면 상품 구매하기 페이지로가야됨(준영님) 
                이 부분이 작성자 권한이 있을 때만 수정이 가능하게끔 해야함 */}
                수정
              </button>
            </div>
            <div className="col-lg-4 col-lx-4"></div>
            <div className="col-lg-4 col-lx-4"></div>
            <div className="row">
              <div className="col-lg-12"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="product_description_area"></section>
    </div>
  );
};

export default Detail;

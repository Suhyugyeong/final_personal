//여기 페이지에서 입찰하기 클릭하면 bidding
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";
import Table from "./Table"; //

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
    auctions: [],
  });
  // const [auctionData, setAuctionData] = useState([]);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const getDetail = async () => {
    console.log("1111", product_id);
    const resp = await axios.get(
      "http://localhost:8000/products/detail/" + product_id
    );
    console.log(resp.data.data[0]);
    setProduct(resp.data.data[0]);
  };
  useEffect(() => {
    getDetail();
  }, []);
  // useEffect(() => {
  //   const futureDate = new Date("2024/02/02 00:00:00").getTime();

  //   const updateTimer = () => {
  //     const now = new Date().getTime();
  //     const diff = futureDate - now;

  //     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  //     setTimeLeft({
  //       days,
  //       hours,
  //       minutes,
  //       seconds,
  //     });
  //   };

  //   const timerId = setInterval(updateTimer, 1000);

  //   return () => clearInterval(timerId);
  // }, []);

  return (
    <div>
      {product.auctions.length}
      <div className="product_image_area section_padding">
        <div className="container">
          <div className="row s_product_inner justify-content-between">
            <div className="col-lg-7 col-xl-7">
              <div className="product_slider_img">
                <img src="/images/book_image1.jpg" alt="book image" />
                {/* 여기서 api에서 받아온 사진이 올라갔으면 좋겠음.. */}
              </div>
            </div>
            <div className="col-lg-5 col-xl-4">
              <div className="s_product_text">
                <h3>{product.title}</h3> <br />
                <h3>책제목</h3>
                <ul className="list">
                  <li>
                    <a href="#">
                      {" "}
                      <span>{product.isbn}: In Stock</span>
                      <br />
                      <span>{product.title}: In Stock</span>
                    </a>
                  </li>
                  <br />
                </ul>
                <p></p>
                <div id="timer">
                  <h3>낙찰종료시간</h3>
                  <div>
                    {timeLeft.days}
                    <span>Days</span>
                  </div>
                  <div>
                    {timeLeft.hours}
                    <span>Hours</span>
                  </div>
                  <div>
                    {timeLeft.minutes}
                    <span>Minutes</span>
                  </div>
                  <div>
                    {timeLeft.seconds}
                    <span>Seconds</span>
                  </div>
                </div>
                {/* <h3>{product.endtime}</h3> */}
                <br />
                <button
                  className="btn_3"
                  // onClick={() => navigate(`/products/bidding/${product_id}`
                  onClick={() => navigate("/products/bidding/")}
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
                  {/* {product.auctions[0].auction_id} */}
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
                <span>입찰 현황을 확인하세요</span>
              </div>
            </div>
            <div>
              <Table auctions={product.auctions} />
            </div>

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

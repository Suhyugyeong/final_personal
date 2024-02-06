//여기 페이지에서 입찰하기 클릭하면 bidding
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Table from "./Table";
import Timer from "./Timer";
// import Update from "./Update";
import React, { useCallback, useState, useEffect, useContext } from "react";
import UserContext from "../../UserContext";

const Detail = () => {
  const context = useContext(UserContext);
  // const loggedInUserEmail = context.state.userData.email;
  const loggedInUserEmail = "";
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
    // 여기 Table의 auctions
  });

  const getDetail = async () => {
    const resp = await axios.get(
      "http://localhost:8000/products/detail/" + product_id
    );

    setProduct(resp.data.data[0]);
  };
  useEffect(() => {
    getDetail();
  }, []);

  const [countdownData, setCountdownData] = useState({
    day: 0,
    hours: 0,
    minuts: 0,
    seconds: 0,
  });

  const [countDownFinished, setCountDownFinished] = useState(false); //disbled 속성 추가

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/products/timer/${product_id}`
        );
        console.log("11", response.data);
        const { endtime } = response.data.countdown;
        console.log("endtime...", endtime);
        setCountdownData(endtime);

        //disbled 속성 추가
        const currentTime = new Date().getTime();
        if (currentTime > endtime) {
          setCountDownFinished(true);
        }
      } catch (error) {
        console.error("타이머 불러들이기 실패", error);
      }
    };
    fetchData();
  }, [product_id]);

  return (
    <div>
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
                <h3>{product.title}</h3>
                <br />
                <ul className="list">
                  <li>
                    <span>ISBN : {product.isbn}</span>
                    <br />
                    <span>구매희망자 : {product.email}</span>
                    <br />
                    <span>입찰시작일 : {product.createAt}</span>
                  </li>
                  <br />
                </ul>
                <p></p>
                {/* p태그에 라인 있음 */}
                <h3>낙찰까지 남은 시간</h3>
                <Timer endtime={countdownData} />
                <br />
                <br />
                <button
                  className="btn_3"
                  // onClick={() => navigate(`/products/bidding/${product_id}`
                  onClick={() => navigate("/products/bidding/")}
                  disabled={countDownFinished}
                >
                  {/* disabled 속성 추가 */}
                  판매입찰하기
                </button>
                <br />
                <br />
                <button
                  className="btn_3"
                  onClick={() => navigate("/products/bidding")}
                  // 여기 구매페이지는 없으니까... 어떻게 할지?
                >
                  즉시구매가 {product.master_price} 원(₩)
                  <br />
                </button>
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
              {/* {userEmail ? (
                <button className="btn btn-warning" type="button">
                  수정
                </button>
              ) : (
                ""
              )} */}
              {loggedInUserEmail === product.email ? (
                <button className="btn btn-warning" type="button">
                  수정
                </button>
              ) : (
                ""
              )}
              {/* 여기 onClick하면 상품 구매하기 페이지로가야됨(준영님) 
                이 부분이 작성자 권한이 있을 때만 수정이 가능하게끔 해야함 */}
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

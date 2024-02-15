//여기 페이지에서 입찰하기 클릭하면 bidding
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Table from "./Table";
import Timer from "./Timer";
import React, { useCallback, useState, useEffect, useContext } from "react";
import UserContext from "../../UserContext";
import Update from "./Update";

const Detail = () => {
  const context = useContext(UserContext);
  const loggedInUserEmail = context.state.userData.email;
  // console.log(context);
  // alert(loggedInUserEmail);
  // const loggedInUserEmail = "";
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

  //수정 버튼이 클릭, 호출되는 함수..
  const goUpdate = () => {
    //update 로 가면서 데이터 넘겨야 한다. 데이터는 이미 detail 에 모두 있기 때문에..
    //detail 의 데이터를 그대로 전달해 주면 된다.
    navigate("/products/update", {
      state: {
        productId: product_id,
        productData: product,
      },
    });
  };

  return (
    <div>
      <div className="product_image_area section_padding">
        <div className="container">
          <div className="row s_product_inner justify-content-between">
            <div className="col-lg-7 col-xl-7">
              <div className="product_slider_img">
                <img
                  src={`http://localhost:8000/static/upload/${product.picture}`}
                  style={{ width: "80px" }}
                  alt="boookImage"
                />
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
                {/* <button
                  className="btn_3"
                  onClick={() => navigate("/products/bidding/")}
                  disabled={countDownFinished}
                >
                  판매입찰하기
                </button> */}
                {loggedInUserEmail === product.email ? (
                  ""
                ) : (
                  <button
                    className="btn_3"
                    onClick={() => navigate("/products/bidding/" + product_id)} //0208
                    disabled={countDownFinished}
                  >
                    판매입찰하기
                  </button>
                )}

                <br />
                <br />
                {/* <button
                  className="btn_3"
                  onClick={() => navigate("/products/pay")}
                  // 02047 일단 기본 pay 페이지로 넘어가게끔...
                >
                  즉시구매가 {product.master_price} 원(₩)
                  <br />
                </button> */}
                {loggedInUserEmail === product.email ? (
                  <button
                    className="btn_3"
                    onClick={() => navigate("/products/pay")}
                  >
                    즉시구매가 {product.master_price} 원(₩)
                    <br />
                  </button>
                ) : (
                  <button className="btn_3" disabled>
                    즉시구매가 {product.master_price} 원(₩)
                    <br />
                  </button>
                )}
                {/* 즉시구매는 글 작성자만 클릭할 수 있게 해두었음.. */}
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
          {loggedInUserEmail === product.email ? (
            <div className="d-grid gap-2 col-3 mx-auto">
              <button
                id="editButton"
                className="btn btn-outline-secondary"
                type="button"
                onClick={goUpdate}
              >
                게시글 수정
              </button>
            </div>
          ) : (
            ""
          )}
          {/* 
          <div className="d-grid gap-2 col-3 mx-auto">
            <button className="btn btn-secondary" type="button">
              수정
            </button>
            <button className="btn btn-primary" type="button">
              Button
            </button>
          </div> */}
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
              {/* {loggedInUserEmail === product.email ? (
                <button
                  className="btn btn-warning"
                  type="button"
                  onClick={goUpdate}
                >
                  수정
                </button>
              ) : (
                ""
              )} */}
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

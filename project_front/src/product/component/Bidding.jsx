import axios from "axios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Detail from "./Detail";

const Bidding = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    auction_id: "",
    product_id: "",
    email: "",
    auction_price: "",
    picture: "",
    product_status: "",
    createAt: "",
  });
  const changeData = useCallback(
    (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
      // 여기서 e.target.name과 value로 상태 업데이트
    },
    [product]
  );
  //bidding 페이지는 글을 쓰는거긴 한데, insert랑은 조금 다른 느낌 아닌가?
  //bidding으로 product가 추가되면 list가 업데이틑되는거니까 맞나??

  const insertBidding = useCallback(
    async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8000/products/bidding", product);
      //bidding 글을 올렸으면 원래 디테일 페이지로.. product를 상태를 요청의 본문으로 포함?
      navigate("/detail/${product.product_id}");
      //product 객체 안에 있는 product_id를 사용해서 경매등록된 제품 id를 가져와야함
    },
    [navigate, product]
  );

  //  // 추가된 내용을 포함한 productDetailData를 생성
  //  const productDetailData = {
  //     // 기존 상품 세부 정보
  //     // ...
  //     // 추가된 내용
  //     additionalData: {/* 추가된 내용 데이터 */}
  //   };

  //   return (
  //     <div>
  //       {/* ProductDetail 컴포넌트에 추가된 내용 전달 */}
  //       <ProductDetail productDetailData={productDetailData} />
  //     </div>
  //   );
  // };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <form action="#">
          {/* 여기가 폼 태그!!!!!!!!!!!!!!!!!!1 */}
          <div className="row g-5">
            <div className="col-md-12 col-lg-6 col-xl-7">
              <div className="row">
                {" "}
                <div className="col-md-12 col-lg-6">
                  <div className="form-item w-100">
                    <label className="form-label my-3">
                      제목, 저자, ISBN<sup>*</sup>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="제목, 저자, ISBN"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                      >
                        검색
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="form-item w-100"></div>
                </div>
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  입찰가(원)<sup>*</sup>
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <span className="input-group-text">₩</span>
                  <span className="input-group-text">WON</span>
                </div>
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  품질등급 <sup>*</sup>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option>품질을 선택해주세요.</option>
                  <option value="1">상</option>
                  <option value="2">중</option>
                  <option value="3">하</option>
                </select>
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  사진첨부<sup>*</sup>
                </label>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                  <label
                    htmlFor="formFileMultiple"
                    className="form-label"
                  ></label>
                </div>
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  상세내용(선택사항)<sup></sup>
                </label>
                <div className="form-item">
                  <textarea
                    name="text"
                    className="form-control"
                    spellCheck="false"
                    cols="30"
                    rows="11"
                    placeholder="제품 상세 내용"
                  ></textarea>
                </div>
              </div>
              <div className="form-check my-3"></div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">제목</th>
                      <th scope="col">저자</th>
                      <th scope="col">ISBN</th>
                      <th scope="col">입찰가</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">
                        <div className="d-flex align-items-center mt-2">
                          <img
                            src="img/vegetable-item-2.jpg"
                            className="img-fluid rounded-circle"
                            // style="width: 90px; height: 90px"
                            alt=""
                          />
                        </div>
                      </td>
                      <td className="py-5">Awesome Brocoli</td>
                      <td className="py-5">$69.00</td>
                      <td className="py-5">2</td>
                      <td className="py-5">$138.00</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td className="py-5">
                        <p className="mb-0 text-dark text-uppercase py-3">
                          최종입찰가
                        </p>
                      </td>
                      <td className="py-5"></td>
                      <td className="py-5"></td>
                      <td className="py-5">
                        <div className="py-3 border-bottom border-top">
                          <p className="mb-0 text-dark">$135.00</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 여기 div 하나 추가한거 */}
              <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                <div className="col-12">
                  <div className="form-check text-start my-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="Transfer-1"
                      name="Transfer"
                      value="Transfer"
                    />
                    <label className="form-check-label" htmlFor="Transfer-1">
                      최종 입찰하시겠습니까?
                    </label>
                  </div>
                  <p className="text-start text-dark">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account. Make
                    your payment directly into our bank account. Please use your
                    Order ID as the payment reference. Your order will not be
                    shipped until the funds have cleared in our account. Make
                    your payment directly into our bank account. Please use your
                    Order ID as the payment reference. Your order will not be
                    shipped until the funds have cleared in our account. Make
                    your payment directly into our bank account. Please use your
                    Order ID as the payment reference. Your order will not be
                    shipped until the funds have cleared in our account.
                  </p>
                </div>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-secondary" type="button">
                  취소하기
                </button>
                <button className="btn btn-info" type="button">
                  입찰하기
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <a
        href="#"
        className="btn btn-primary border-3 border-primary rounded-circle back-to-top"
      >
        <i className="fa fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default Bidding;

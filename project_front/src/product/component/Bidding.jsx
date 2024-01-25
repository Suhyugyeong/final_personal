import axios from "axios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
//Bidding 페이지에서 입력받은 값을 Table에 전달해야 되는데..

const Bidding = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    author: "",
    isbn: "",
    auction_price: "",
    picture: "",
    product_status: "",
    createAt: "",
  });
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();
  const [uploadImage, setUploadImage] = useState();

  const changeData = useCallback(
    (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
      // 여기서 e.target.name과 value로 상태 업데이트
    },
    [product]
  );
  // const changeData = (e) => {
  //   setProduct((prevProduct) => ({ ...prevProduct, [e.target.name]: e.target.value }));
  // };

  const insertBidding = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("file1", file);
      formData.append("title", title);

      try {
        const response = await axios.post(
          "http://localhost:8000/products/upload", // 이미지 업로드를 처리하는 서버 엔드포인트
          formData
        );

        if (response.data.status === 200) {
          // 서버에서 받은 이미지 경로 또는 식별자를 product 상태에 저장
          setProduct({ ...product, picture: response.data.data });
          setUploadImage(response.data.data);
        } else {
          console.error("이미지 업로드 실패");
        }
      } catch (error) {
        console.error("에러발생", error);
      }
    } else {
      alert("데이터를 입력하지 않았습니다.");
    }

    const biddingData = {
      title: product.title,
      author: product.author,
      isbn: product.isbn,
      auction_price: product.auction_price,
      picture: product.picture,
      product_status: product.product_status,
      createAt: product.createAt,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/products/bidding",
        biddingData
      );
      //저장 성공하면
      if (response.data.status === 200) {
        navigate(`/detail/${response.data.data.product_id}`);
      } else {
        console.error("입찰 내용 저장 실패");
      }
    } catch (error) {
      console.error("에러발생", error);
    }
  };
  //asiox.post를 사용해서 /products/bidding 엔드포인트로 post요청을 보내는중
  //biddingData 객체는 클라이언트에서 작성한 내용이 포함되어 있음

  const upload = async (e) => {
    e.preventDefault();
    console.log(title, file);
    if (file) {
      const formData = new FormData();
      formData.append("file1", file);
      formData.append("title", title);
      const resp = await axios.post(
        "http://localhost:8000/products/bidding",
        // 여기를 어떻게 수정?
        formData
      );
      if (resp.data.status === 200) {
        alert("upload ok");
        setUploadImage(resp.data.data);
      }
    } else {
      alert("데이터를 입력하지 않았습니다.");
    }
  };
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <form action="#">
          <div className="row g-5">
            <div className="col-md-12 col-lg-6 col-xl-7">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="form-item w-100">
                    <label className="form-label my-3">
                      제목, 저자, ISBN<sup>*</sup>
                    </label>
                    <div className="input-group mb-3">
                      <form action="/upload" method="post">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="제목, 저자, ISBN"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                          onClick={changeData}
                          // 여기서 api 가져오는게 필요해서...
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          id="button-addon2"
                          onClick={changeData}
                        >
                          검색
                        </button>
                      </form>
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
                  <form action="/upload" method="post">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Dollar amount (with dot and two decimal places)"
                      onChange={changeData}
                    />
                    <span className="input-group-text">₩</span>
                    <span className="input-group-text">WON</span>
                  </form>
                </div>
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  품질등급 <sup>*</sup>
                </label>
                <form action="/upload" method="post">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={changeData}
                  >
                    <option>품질을 선택해주세요.</option>
                    <option value="1">상</option>
                    <option value="2">중</option>
                    <option value="3">하</option>
                  </select>
                </form>
              </div>
              <form
                id="form"
                action="/upload"
                //액션 업로드로 해줌
                method="post"
                encType="multipart/form-data"
              >
                <div className="form-item">
                  <label className="form-label my-3">
                    사진첨부<sup>*</sup>
                  </label>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                      type="file"
                      name="file1"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input
                      type="button"
                      value="업로드"
                      // onClick={upload}
                      onClick={insertBidding}
                    />
                    {/* <input
                      name="file1"
                      // 여기 추가
                      type="file"
                      className="form-control"
                      id="formFileMultiple"
                      multiple
                    />
                    <label
                      htmlFor="formFileMultiple"
                      className="form-label"
                    ></label> */}
                  </div>
                </div>
              </form>
              <br />
              {uploadImage ? (
                <img src={`http://localhost:8000/upload/${uploadImage}`} />
              ) : (
                ""
              )}
              <div className="form-item">
                <label className="form-label my-3">
                  상세내용(선택사항)<sup></sup>
                </label>
                {/* 여기 체크 안 하면 경고 메시지 띄우고 싶음 */}
                <div className="form-item">
                  <form action="/upload" method="post">
                    <textarea
                      name="text"
                      className="form-control"
                      spellCheck="false"
                      cols="30"
                      rows="11"
                      placeholder="제품 상세 내용"
                      onChange={changeData}
                    ></textarea>
                  </form>
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
                            alt=""
                          />
                        </div>
                      </td>
                      <td className="py-5">
                        Awesome Brocoli(여기 api 결과가 들어갔음 좋겠음)
                        {/* {uploadImage ? (
                          <img
                            src={`http://localhost:8000/upload/${uploadImage}`}
                          />
                        ) : (
                          ""
                        )} */}
                      </td>
                      <td className="py-5">$69.00</td>
                      <td className="py-5">2</td>
                      <td className="py-5">$138.00</td>
                      {/* 이쪽 td는 전부 책 검색하고 나서 선택한 결과가 들어갔으면 좋겠음..되려나? */}
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
                          {/* 여기도 최종 입찰가를 작성하면 그 값이 여기로 들어갔으면 좋겠음 */}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                <div className="col-12">
                  <div className="form-check text-start my-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="Transfer-1"
                      name="Transfer"
                      value="Transfer"
                      required
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
              <br />
              <br />
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={() => navigate(`/detail/${product.product_id}`)} //백택사용
                >
                  취소하기
                </button>
                <button
                  className="btn btn-info"
                  type="button"
                  onClick={insertBidding}
                  style={{ backgroundColor: "#e83e8c" }}
                >
                  입찰하기
                  {/* 낙찰페이지 불러오기 콘솔은 찍히는데... 변화가 없다... */}
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

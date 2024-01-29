import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
//Bidding 페이지에서 입력받은 값을 Table에 전달해야 되는데..

const Bidding = (props) => {
  const navigate = useNavigate();
  const product_id = 9; // props.product_id ==> props로 상품id 받아오기
  const email = "kim@a.com"; // 전역상태값에서 받아오기.

  //입찰 데이터 상태
  const [data, setData] = useState({
    email: email,
    product_id: product_id,
    isbn: "",
    auctionPrice: 0,
    quality: "",
    additional: "",
  });

  // controlled data
  const changeData = useCallback((e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }, []);

  // 업로드 파일 상태
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState();
  const [uploadImage, setUploadImage] = useState();

  // 최종 체크 상태
  const [isChecked, setIsChecked] = useState(false);

  // 응답받아온 정보 노출
  const [bookTitle, setBookTitle] = useState("");
  const [bookIsbn, setBookIsbn] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [bookImg, setBookImg] = useState("");

  // 사진 업로드 함수
  const upload = async (e) => {
    e.preventDefault();
    console.log(fileName, file);
    if (file) {
      const formData = new FormData();
      formData.append("file1", file);
      formData.append("fileName", fileName);
      const res = await axios.post(
        "http://localhost:8000/auction/upload/",
        formData
      );
      if (res.data.status === 200) {
        setUploadImage(res.data.data);
        setFileName(res.data.data);
      } else {
        console.log(res.data.message);
      }
    } else {
      alert("사진이 첨부되지 않았습니다.");
    }
  };

  // 입찰하기 함수
  const insertBidding = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/auction/insert", {
      auctionInfo: data,
      picture: fileName,
    });
    if (res.data.status === 200) {
      console.log(res.data);
      setBookTitle(res.data.data.title);
      setBookIsbn(res.data.data.isbn);
      setBookPrice(res.data.data.auction_price);
      setBookImg(res.data.data.file_name);
    } else {
      console.error("입찰 실패");
    }
  };

  // 입찰하기 함수
  // const insertBidding = async (e) => {
  //   e.preventDefault();

  //   if(file){
  //     const formData = new FormData();
  //     formData.append('file1', file)
  //     formData.append('title', title)
  //     const inputData = JSON.stringify(data) // 입찰데이터를 string화
  //     formData.append('inputData', inputData)

  //     const response = await axios.post("http://localhost:8000/auction/insert", formData);
  //     if (response.data.status === 200) {
  //       window.alert(response.data.message)
  //       setUploadImage(response.data.data.file_name)
  //       {/* 0127 추가 */}
  //       setBookTitle(response.data.data.title)
  //       setBookIsbn(response.data.data.isbn)
  //       setBookPrice(response.data.data.auction_price)
  //     } else {
  //       console.error("입찰 실패");
  //     }
  //   } else {
  //     alert('사진이 첨부되지 않았습니다.')
  //   }
  // };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <form id="form" method="post">
          <div className="row g-5">
            <div className="col-md-12 col-lg-6 col-xl-7">
              <div className="row">
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
                    name="auctionPrice"
                    id="auctionPrice"
                    value={data.auctionPrice}
                    onChange={changeData}
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
                  name="quality"
                  id="quality"
                  value={data.quality}
                  onChange={changeData}
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
                    type="text"
                    name="fileName"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                  />
                  <input
                    type="file"
                    name="file1"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>

              <br />

              <div className="form-item">
                <label className="form-label my-3">
                  상세내용(선택사항)<sup></sup>
                </label>
                <div className="form-item">
                  <textarea
                    className="form-control"
                    spellCheck="false"
                    cols="30"
                    rows="11"
                    placeholder="제품 상세 내용"
                    name="additional"
                    id="additional"
                    value={data.additional}
                    onChange={changeData}
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
                      <th scope="col">ISBN </th>
                      <th scope="col">제목</th>
                      <th scope="col"></th>
                      <th scope="col">저자</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">
                        <div className="d-flex align-items-center mt-2">
                          {/* {bookImg ? (
                            <img
                              src={`http://localhost:8000/upload/${bookImg}`}
                              style={{ width: "100px" }}
                            />
                          ) : (
                            ""
                          )} */}
                        </div>
                      </td>
                      <td className="py-5">{bookIsbn}</td>
                      <td className="py-5">{bookTitle}</td>
                      <td className="py-5"></td>
                      <td className="py-5"></td>
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
                          <p className="mb-0 text-dark">{bookPrice} 원</p>
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
                      id="isChecked"
                      name="isChecked"
                      value={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                    />
                    <label className="form-check-label" htmlFor="isChecked">
                      최종 입찰하시겠습니까?
                    </label>
                  </div>
                  {!isChecked ? (
                    <div className="alert alert-warning">
                      최종 입찰을 위해 체크박스를 선택하세요.
                    </div>
                  ) : (
                    ""
                  )}
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
                  className="btn_3"
                  type="button"
                  onClick={() => navigate(`/detail/${product_id}`)}
                >
                  취소하기
                </button>
                <button className="btn_3" type="button" onClick={insertBidding}>
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

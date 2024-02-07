const Pay = () => {
  return (
    <section className="checkout_area padding_top">
      <div className="container">
        <div className="returning_customer">
          <div className="check_title"></div>

          <form
            className="row contact_form"
            action="#"
            method="post"
            noValidate
          >
            <div className="col-md-12 form-group"></div>
          </form>
        </div>
        {/* <div className="cupon_area"> */}
        {/* <div className="check_title">
            <h2>
              Have a coupon?
              <a href="#">Click here to enter your code</a>
            </h2>
          </div> */}
        {/* <input type="text" placeholder="Enter coupon code" />
          <a className="tp_btn" href="#">
            Apply Coupon
          </a> */}
        {/* </div> */}
        <div className="billing_details">
          <div className="row">
            <div className="col-lg-8">
              <h3>배송지</h3>
              <form
                className="row contact_form"
                action="#"
                method="post"
                noValidate
              >
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    placeholder="주문자"
                  />
                </div>

                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    placeholder="받는 사람"
                  />
                </div>

                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    placeholder="우편번호(-없이 입력해주세요.)"
                  />
                </div>

                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    placeholder="배송지"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    placeholder="상세주소"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    placeholder="휴대전화(-없이 입력해주세요.)"
                  />
                </div>

                <div className="col-md-12 form-group p_star">
                  <select className="country_select">
                    <option value="1">배송 방법을 선택하세요.</option>
                    <option value="2">집앞 배송</option>
                    <option value="3">편의점 배송</option>
                  </select>
                </div>
                <div className="col-md-12 form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="1"
                    placeholder="Order Notes"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="order_box">
                <h2>Your Order</h2>

                <ul className="list list_2">
                  <li>
                    <a href="#">
                      상품금액
                      <span>$2160.00</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      배송비
                      <span>Flat rate: $50.00</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      최종결제금액
                      <span>$2210.00</span>
                    </a>
                  </li>
                </ul>
                <div className="payment_item">
                  <div className="radion_btn">
                    <input type="radio" id="f-option5" name="selector" />
                    <label htmlFor="f-option5">무통장입금</label>
                    <div className="check"></div>
                  </div>
                  <p>
                    Please send a check to Store Name, Store Street, Store Town,
                    Store State / County, Store Postcode.
                  </p>
                </div>
                <div className="payment_item active">
                  <div className="radion_btn">
                    <input type="radio" id="f-option6" name="selector" />
                    <label htmlFor="f-option6">카드결제 </label>
                    <img src="img/product/single-product/card.jpg" alt="" />
                    <div className="check"></div>
                  </div>
                  <p>
                    Please send a check to Store Name, Store Street, Store Town,
                    Store State / County, Store Postcode.
                  </p>
                </div>
                <div className="creat_account">
                  <input type="checkbox" id="f-option4" name="selector" />
                  <label htmlFor="f-option4">I’ve read and accept the </label>
                  <a href="#">terms & conditions*</a>
                </div>
                <a className="btn_3" href="#">
                  결제하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  // (
  //   <div
  //     style={{
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       height: "100vh",
  //       width: "100vw",
  //     }}
  //   >
  //     {/* <div className="product_image_area section_padding"> */}
  //     <div className="container">
  //       {/* <div> */}
  //       <form className="row g-3">
  //         <div className="col-md-12">
  //           <select
  //             className="form-select"
  //             aria-label="Default select example"
  //             style={{ width: "800px" }}
  //           >
  //             <option selected>배송방법 선택</option>
  //             <option value="1">택배</option>
  //             <option value="2">우체국택배</option>
  //             <option value="3">편의점 방문 픽업</option>
  //           </select>
  //         </div>

  //         <div className="col-md-12 xl-6">
  //           <label htmlFor="buyer" className="form-label">
  //             주문인
  //           </label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="buyer"
  //             style={{ width: "800px" }}
  //           />
  //         </div>
  //         <div className="col-md-12">
  //           <label htmlFor="buyer2" className="form-label">
  //             받으시는 분
  //           </label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="buyer2"
  //             style={{ width: "800px" }}
  //           />
  //         </div>
  //         <div className="col-md-6">
  //           <label htmlFor="postNumber" className="form-label">
  //             우편번호(-없이 입력해주세요.)
  //           </label>
  //           <input
  //             type="number"
  //             className="form-control"
  //             id="postNumber"
  //             style={{ width: "800px" }}
  //           />
  //         </div>

  //         <div className="col-12">
  //           <label htmlFor="inputAddress" className="form-label">
  //             주소
  //           </label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="inputAddress"
  //             placeholder="예) 서소문로 89-31 "
  //             style={{ width: "800px" }}
  //           />
  //         </div>
  //         <div className="col-12">
  //           <label htmlFor="inputAddress2" className="form-label">
  //             상세주소
  //           </label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="inputAddress2"
  //             placeholder="예) 1동 101호"
  //             style={{ width: "800px" }}
  //           />
  //         </div>

  //         <div className="col-md-12">
  //           <label htmlFor="inputZip" className="form-label">
  //             휴대전화번호(-없이 입력해주세요.)
  //           </label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="inputZip"
  //             style={{ width: "800px" }}
  //           />
  //         </div>
  //         <div></div>
  //         <div></div>

  //         {/* <div className="d-grid gap-2">
  //               <button className="btn btn-secondary" type="button">
  //                 취소하기
  //               </button>
  //               <button className="btn btn-primary" type="button">
  //                 결제하기
  //               </button>
  //             </div> */}
  //       </form>
  //       {/* <div className="d-grid gap-2">
  //             <button className="btn btn-secondary" type="button">
  //               취소하기
  //             </button>
  //             <button className="btn btn-primary" type="button">
  //               결제하기
  //             </button>
  //           </div> */}
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           // height: "100vh",
  //         }}
  //       >
  //         <button className="btn_3">취소하기</button>
  //         &nbsp; &nbsp;
  //         <button className="btn_3">결제하기</button>
  //       </div>
  //     </div>
  //     {/* </div> */}
  //   </div>
  //   // </div>
  // );
};

export default Pay;

<!DOCTYPE html>
<html lang="zxx">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>aranaz</title>
    <link rel="icon" href="img/favicon.png" />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <!-- animate CSS -->
    <link rel="stylesheet" href="css/animate.css" />
    <!-- owl carousel CSS -->
    <link rel="stylesheet" href="css/owl.carousel.min.css" />
    <!-- nice select CSS -->
    <link rel="stylesheet" href="css/nice-select.css" />
    <!-- font awesome CSS -->
    <link rel="stylesheet" href="css/all.css" />
    <!-- flaticon CSS -->
    <link rel="stylesheet" href="css/flaticon.css" />
    <link rel="stylesheet" href="css/themify-icons.css" />
    <!-- font awesome CSS -->
    <link rel="stylesheet" href="css/magnific-popup.css" />
    <!-- swiper CSS -->
    <link rel="stylesheet" href="css/slick.css" />
    <link rel="stylesheet" href="css/price_rangs.css" />
    <!-- style CSS -->
    <link rel="stylesheet" href="css/style.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  </head>

  <body>
  

    
    <!--================Checkout Area =================-->
    <section class="checkout_area padding_top">
      <div class="container">
        <div class="returning_customer">
          <div class="check_title">
                 <div class="col-lg-12">
                    <h2>책 검색</h2>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="제목, 저자, ISBN" aria-label="Recipient's username" aria-describedby="button-addon2">
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">검색</button>
                </div>
                </div>
                <div class="col-lg-12">
                  <h2>입찰가격</h2>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="입찰가" aria-label="Recipient's username" aria-describedby="basic-addon2">
                  <span class="input-group-text" id="basic-addon2">원(won)</span>
                </div>
                <h2>품질등급</h2>
                <select class="country_select">
                  <option value="1">상</option>
                  <option value="2">중</option>
                  <option value="4">하</option>
                </select>
                <section class="confirmation_part padding_top">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="confirmation_tittle">
                          <span>품질 등급 안내</span>
                        </div>
                      </div>
                      <div class="col-lg-4 col-lx-4">
                        <div class="single_confirmation_details">
                          <h4>상</h4>
                          <ul>
                            <li>
                              <p>낙장, 찢어짐, 오염</p>
                              <span>: 없음</span>
                            </li>
                            <li>
                              <p>제본탈착</p>
                              <span>: 없음</span>
                            </li>
                            <li>
                              <p>변색, 얼룩, 해짐</p>
                              <span>: 없음</span>
                            </li>
                            <li>
                              <p>위 사항 중 하나도 해당 없음</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-4 col-lx-4">
                        <div class="single_confirmation_details">
                          <h4>중</h4>
                          <ul>
                            <li>
                              <p>낙장, 찢어짐, 오염</p>
                              <span>: 없음</span>
                            </li>
                            <li>
                              <p>제본탈착</p>
                              <span>: 없음</span>
                            </li>
                            <li>
                              <p>변색, 얼룩, 해짐</p>
                              <span>: 있음</span>
                            </li>
                            <li>
                              <p>위 사항 중 두 개 이하 해당</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-4 col-lx-4">
                        <div class="single_confirmation_details">
                          <h4>하</h4>
                          <ul>
                            <li>
                              <p>낙장, 찢어짐, 오염</p>
                              <span>:있음</span>
                            </li>
                            <li>
                              <p>제본탈착</p>
                              <span>: 있음</span>
                            </li>
                            <li>
                              <p>변색, 얼룩, 해짐</p>
                              <span>: 없음</span>
                            </li>       <li>
                              <p>위 사항 중 두 개 이상 해당</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                <div class="col-md-12 form-group p_star"></div>
              <div class="creat_account">
            </div>
            </div>
            </section>
                <div class="col-lg-12">
                  <div class="order_box">
                    <div class="input-group mb-3">
                      <div class="productResult"> 
                        <img/>
                      </div>
                    </div>
                    <h2>사진첨부</h2>
                    <!-- <input
                    type="file"
                    class="real-upload"
                    accept="image/*"
                    required
                    multiple
                    class="btn btn-secondary"
                  /> -->
                  <div class="mb-3">
                    <label for="formFile" class="form-label"></label>
                    <input class="form-control" type="file" id="formFile">
                  </div>
                  <h2>상세설명(선택사항)</h2>
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                    <label for="floatingTextarea2">(예시)낙장은 없으나 오염 있음</label>
                  </div>
                    </ul>
                    <ul class="list">
                      <li>
                        <a href="#">000
                          <span>000</span>
                        </a>
                      </li>
                    <div class="payment_item">
                      <div class="radion_btn">
                        <input type="radio" id="f-option5" name="selector" />
                        <label for="f-option5">Check payments</label>
                        <div class="check"></div>
                      </div>
                      <p>
                        Please send a check to Store Name, Store Street, Store Town,
                        Store State / County, Store Postcode.
                      </p>
                    </div>
                    <div class="payment_item active">
                      <div class="radion_btn">
                        <input type="radio" id="f-option6" name="selector" />
                        <label for="f-option6">Paypal </label>
                        <img src="img/product/single-product/card.jpg" alt="" />
                        <div class="check"></div>
                      </div>
                      <p>
                        Please send a check to Store Name, Store Street, Store Town,
                        Store State / County, Store Postcode.
                      </p>
                    </div>
                    <div class="creat_account">
                      <input type="checkbox" id="f-option4" name="selector" />
                      <label for="f-option4">최종 입찰에 동의합니다</label>
                      <a href="#">terms & conditions*</a>
                    </div>
                    <!-- <a class="btn_3" href="#">Proceed to Paypal</a>
                    <a class="btn_3" href="#">Proceed to Paypal</a> -->
                    <div class="d-grid gap-2 col-6 mx-auto">
                      <button class="btn btn-secondary" type="button">취소하기</button>
                      <button class="btn btn-primary" type="button">입찰하기</button>
                    </div>
                  </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>

    <!-- jquery plugins here-->
    <!-- jquery -->
    <script src="js/jquery-1.12.1.min.js"></script>
    <!-- popper js -->
    <script src="js/popper.min.js"></script>
    <!-- bootstrap js -->
    <script src="js/bootstrap.min.js"></script>
    <!-- easing js -->
    <script src="js/jquery.magnific-popup.js"></script>
    <!-- swiper js -->
    <script src="js/swiper.min.js"></script>
    <!-- swiper js -->
    <script src="js/masonry.pkgd.js"></script>
    <!-- particles js -->
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.nice-select.min.js"></script>
    <!-- slick js -->
    <script src="js/slick.min.js"></script>
    <script src="js/jquery.counterup.min.js"></script>
    <script src="js/waypoints.min.js"></script>
    <script src="js/contact.js"></script>
    <script src="js/jquery.ajaxchimp.min.js"></script>
    <script src="js/jquery.form.js"></script>
    <script src="js/jquery.validate.min.js"></script>
    <script src="js/mail-script.js"></script>
    <script src="js/stellar.js"></script>
    <script src="js/price_rangs.js"></script>
    <!-- custom js -->
    <script src="js/custom.js"></script>
  </body>
</html>

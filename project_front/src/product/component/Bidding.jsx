<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Fruitables - Vegetable Website Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="keywords" />
    <meta content="" name="description" />

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@600;800&display=swap"
      rel="stylesheet"
    />

    <!-- Icon Font Stylesheet -->
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
      rel="stylesheet"
    />

    <!-- Libraries Stylesheet -->
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet" />

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  </head>

  <body>
    <!-- Checkout Page Start -->
    <div class="container-fluid py-5">
      <div class="container py-5">
        <!-- <h1 class="mb-4">입찰하기</h1> -->
        <form action="#">
          <div class="row g-5">
            <div class="col-md-12 col-lg-6 col-xl-7">
              <div class="row">
                <div class="col-md-12 col-lg-6">
                  <div class="form-item w-100">
                    <label class="form-label my-3"
                      >제목, 저자, ISBN<sup>*</sup></label
                    >            <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="제목, 저자, ISBN" aria-label="Recipient's username" aria-describedby="button-addon2">
                      <button class="btn btn-outline-secondary" type="button" id="button-addon2">검색</button>
                    </div>
         
                    
                  </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    
                  <div class="form-item w-100">
                    <!-- <label class="form-label my-3"><sup>*</sup></label> -->
               
                    <!-- <input type="button" class="form-control" value="검색"/> -->
                  </div>
                </div>
              </div>
              <div class="form-item">
                <label class="form-label my-3">입찰가(원)<sup>*</sup></label>
                
<div class="input-group">
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
  <span class="input-group-text">₩</span>
  <span class="input-group-text">WON</span>
</div>

              </div>
              <div class="form-item">
                <label class="form-label my-3">품질등급 <sup>*</sup></label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>품질을 선택해주세요.</option>
                  <option value="1">상</option>
                  <option value="2">중</option>
                  <option value="3">하</option>
                </select>
                
                <!-- <input
                  type="text"
                  class="form-control"
                  placeholder="House Number Street Name"
                /> -->
              </div>
              <div class="form-item">
                <label class="form-label my-3">사진첨부<sup>*</sup></label>
                <div class="mb-3">
                  <input class="form-control" type="file" id="formFileMultiple" multiple>
                  <label for="formFileMultiple" class="form-label"></label>
                </div>
         
              </div>

              <div class="form-item">
                <label class="form-label my-3"
                  >상세내용(선택사항)<sup></sup></label
                >
                <div class="form-item">
                  <textarea
                    name="text"
                    class="form-control"
                    spellcheck="false"
                    cols="30"
                    rows="11"
                    placeholder="제품 상세 내용"
                  ></textarea>
                </div>
                <!-- <input type="email" class="form-control" /> -->
              </div>
              <div class="form-check my-3">
              </div>
            </div>
            <div class="col-md-12 col-lg-6 col-xl-5">
              <div class="table-responsive">
                <table class="table">
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
                      <th scope="row">
                        <div class="d-flex align-items-center mt-2">
                          <img
                            src="img/vegetable-item-2.jpg"
                            class="img-fluid rounded-circle"
                            style="width: 90px; height: 90px"
                            alt=""
                          />
                        </div>
                      </th>
                      <td class="py-5">Awesome Brocoli</td>
                      <td class="py-5">$69.00</td>
                      <td class="py-5">2</td>
                      <td class="py-5">$138.00</td>
                    </tr>

    
                    </tr>
                    <tr>
                      
                
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td class="py-5">
                        <p class="mb-0 text-dark text-uppercase py-3">최종입찰가</p>
                      </td>
                      <td class="py-5"></td>
                      <td class="py-5"></td>
                      <td class="py-5">
                        <div class="py-3 border-bottom border-top">
                          <p class="mb-0 text-dark">$135.00</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="row g-4 text-center align-items-center justify-content-center border-bottom py-3"
              >
                <div class="col-12">
                    
                  <div class="form-check text-start my-3">
                    <input
                    
                      type="checkbox"
                      class="form-check-input"

                      id="Transfer-1"
                      name="Transfer"
                      value="Transfer"
                    />
                    <label class="form-check-label" for="Transfer-1" 
                      >최종 입찰하시겠습니까?</label
                    >
                  </div>
                  <p class="text-start text-dark">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>


                </div>
              </div>
              </div>
              <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-secondary" type="button">취소하기</button>
                <button class="btn btn-info" type="button">입찰하기</button>
              </div>
            </div>
            
          </div>
          
        </form>
        
      </div>
      
    </div>
    

    <!-- Checkout Page End -->

    <!-- Back to Top -->
    <a
      href="#"
      class="btn btn-primary border-3 border-primary rounded-circle back-to-top"
      ><i class="fa fa-arrow-up"></i
    ></a>

    <!-- JavaScript Libraries -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>
  </body>
</html>

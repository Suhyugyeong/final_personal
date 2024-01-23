//여기 페이지에서 입찰하기 클릭하면 bidding
import {Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import React, {useCallback, useState, useEffect} from "react"
// import Detail = ({DetailData})=>{
//     return(
//         <div>
//         {/* 상품 세부 정보 표시 부분 */}
//         <h2>Product Detail</h2>
//         {/* 기존 상품 세부 정보 표시 내용 */}
        
//         {/* 추가된 내용을 위한 테이블 */}
//         <Table productData={DetailData.additionalData} />
//       </div>
//     )
// }

const Detail = () => {
    const navigate = useNavigate()
    const {product_id} = useParams()
    const [product, setProduct] = useState({
        title:"",
        email:"",
        picture:"",
        master_price:"",
        auctuon_id:"",
        endtime:"",
        auction_status:"",
        isbn :"",
        content:"",
        cnt:"",
        createAt: "",
    })

const getDetail = async () => {
    const resp =await axios.get("http://localhost:8000/products/detail/" + product_id);
    setProduct(resp.data.data)
}
useEffect(()=>{
    getDetail();
},[]);
return(
    <div className="product_image_area section_padding">
      <div className="container">
        <div className="row s_product_inner justify-content-between">
          <div className="col-lg-7 col-xl-7">
            <div className="product_slider_img">
              <div id="vertical">
                <div data-thumb="img/product/single-product/book_img.jpg">
                  <img src="img/product/single-product/book_img.jpg" />
                </div>
                <div data-thumb="img/product/single-product/product_1.png">
                  <img src="img/product/single-product/product_1.png" />
                </div>
                <div data-thumb="img/product/single-product/product_1.png">
                  <img src="img/product/single-product/product_1.png" />
                </div>
                <div data-thumb="img/product/single-product/product_1.png">
                  <img src="img/product/single-product/product_1.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="s_product_text"> 
              <h3>상대성이론</h3> <br/>
              <ul className="list">
                  <li>
                    <a href="#"> <span>저자</span> : In Stock</a>
                  </li>
                  <li>
                    <a href="#"> <span>ISBN</span> : In Stock</a>
                  </li>
                  <li>
                    <a href="#"> <span>출판년도</span> : In Stock</a>
                  </li>
                  <br/>
                </ul>
                <p>
                </p>
                      <h3>입찰 종료 시간</h3><br/>
                      <a href="#" className="btn_3">판매입찰하기</a>
                      <h2>즉시구매가</h2>
              </div>
            </div> 
 
                      </div>
        </div>
      </div>

      <div className="container">
        <p>
          Beryl Cook is one of Britain’s most talented and amusing artists
          .Beryl’s pictures feature women of all shapes and sizes enjoying
          themselves .Born between the two world wars, Beryl Cook eventually
          left Kendrick School in Reading at the age of 15, where she went
          to secretarial school and then into an insurance office. After
          moving to London and then Hampton, she eventually married her next
          door neighbour from Reading, John Cook. He was an officer in the
          Merchant Navy and after he left the sea in 1956, they bought a pub
          for a year before John took a job in Southern Rhodesia with a
          motor company. Beryl bought their young son a box of watercolours,
          and when showing him how to use it, she decided that she herself
          quite enjoyed painting. John subsequently bought her a child’s
          painting set for her birthday and it was with this that she
          produced her first significant work, a half-length portrait of a
          dark-skinned lady with a vacant expression and large drooping
          breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
          <br/>
          <br/>
          <br/>
        </p>
    </div>

    <section className="confirmation_part padding_top">
      <div className="container">
        <div className="row"> !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          <div className="col-lg-12"> 
            <div className="confirmation_tittle">
              <span>입찰 현황을 확인하세요.</span>
            </div>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">입찰자</th>
                <th scope="col">입찰금액(원)</th>
                <th scope="col">상품상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>30,000</td>
                <td>중</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>38,000</td>
                <td>상</td> 
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>29,000</td>
                <td>중</td>  
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Larry the Bird</td>
                <td>29,000</td>
                <td>중</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Larry the Bird</td>
                <td>29,000</td>
                <td>중</td>
              </tr>
            </tbody>
          </table>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-warning" type="button">수정</button>
        </div>
          <div className="col-lg-4 col-lx-4">
            </div>
          <div className="col-lg-4 col-lx-4">
            </div>
        <div className="row">
          <div className="col-lg-12">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="product_description_area">
        {/* 설명 */}
    </section>
);
};

export default Detail;
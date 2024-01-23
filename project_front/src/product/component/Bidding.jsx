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

  const insertBidding = useCallback(async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/products/bidding", product);
    //bidding 글을 올렸으면 원래 디테일 페이지로.. product를 상태를 요청의 본문으로 포함?
    navigate("/detail/${product.product_id}"); 
    //product 객체 안에 있는 product_id를 사용해서 경매등록된 제품 id를 가져와야함
  },[navigate, product]);
  
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

return(
//html
)};

export default Bidding;
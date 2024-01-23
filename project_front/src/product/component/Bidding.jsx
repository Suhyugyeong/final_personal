import axios from "axios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      setProduct({ ...product, [e.target.auction_id]: e.target.value });
      // 여기서 e.target.auction_id 가 맞는건가...?
    },
    [product]
  );
  //bidding 페이지는 글을 쓰는거긴 한데, insert랑은 조금 다른 느낌 아닌가?
  //bidding으로 product가 추가되면 list가 업데이틑되는거니까 맞나??

  const insertBidding = useCallback(async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/products/bidding", product);
    //bidding 글을 올렸으면 원래 디테일 페이지로.. product를 상태를 요청의 본문으로 포함?
    navigate("/detail/:id"); //원래 보던 디테일 id가 뭔지 어떻게 알지??
  },[navigate, product]);

return(
//html
)};

export default Bidding;
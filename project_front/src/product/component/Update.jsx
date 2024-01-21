import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const { product_id } = useParams();
  const [product, setProduct] = useState({
    product_id: "",
    master_price: "",
    content: "",
    //여기는 바꿀 수 있는 부분만 넣는건가? 변경될 내용? 초기값...
    //여기서부터 하기
  });

  const changeData = (e) => {
    setProduct({ ...product, [e.target.product_id]: e.target.value });
  };
};

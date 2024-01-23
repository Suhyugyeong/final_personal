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
  });

  const changeData = (e) => {
    setProduct({ ...product, [e.target.product_id]: e.target.value });
  };

  const getData = async () => {
    const resp = await axios.get("http://localhost:8000/products/detail/" + product_id);
    setProduct(resp.data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const detailUpdate = async (e) => {
    await axios.post("http://localhost:8000/products/update/" + product);
    navigate("product/detail/:product_id");
  };
  return(
    //html
  )
};
export default Update;
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
    setProduct({ ...product, [e.target.name]: e.target.value });
    //[e.target.name] 변경된 input요소 이름
  };

  const getData = async () => {
    const resp = await axios.get(
      "http://localhost:8000/products/detail/" + product_id
    );
    setProduct(resp.data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const detailUpdate = async (e) => {
    await axios.post("http://localhost:8000/products/update/" + product_id, {
      product,
    });
    //서버에서 json 형식으로 데이터를 받기를..
    navigate("product/detail/" + product_id);
  };
  return (
    <div>
      {/* 구매자 입장에서의 수정페이지니까 구매자가 작성한 페이지내에서 작성해야함 */}
    </div>
  );
};
export default Update;

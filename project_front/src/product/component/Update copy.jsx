import axios from "axios";
import React, { useCallback, useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import UserContext from "../../UserContext";

const Update = () => {
  const navigate = useNavigate();

  //글쓴이인지 확인을 해야함
  const context = useContext(UserContext)
  //글쓴이 인지 확인하기 위한 코드는??
  const writtenUser = context.state.userData.//여기에 글쓴이인지를 파악하려면?

  const { product_id } = useParams();
  //해당 url에서 product_id 받아올거고
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
  return <h1>buypage랑 같은 html이 들어가야 함 </h1>;
};
export default Update;

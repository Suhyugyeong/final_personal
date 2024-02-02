//detail에 넣어야 할 것 같음...
//아니면 detail에서 update로 props 를 전달하고..? 넘긴다?

import axios from "axios";
import React, { useCallback, useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../UserContext";

const Update = () => {
  const navigate = useNavigate();

  const context = useContext(UserContext);
  //글쓴이 인지 확인하기 위한 코드는??
  const loggedInUserEmail = context.state.userData.eamil;

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

  if (resp.data.data.email !== loggedInUserEmail) {
    //권한이 없으면 다른페이지로 이동
    navigate("/unAuthorizedPage");
  }

  useEffect(() => {
    getData();
  }, [loggedInUserEmail, navigate, product_id]);

  const DetailUpdate = async (e) => {
    await axios.posst("http://localhost:8000/products/update/" + product_id, {
      product,
    });
    navigate("product/detail/" + product_id);
  };

  return (
    <div>
      {/* 수정 페이지의 HTML 렌더링을 추가 */}
      <h1>수정 페이지</h1>
      {/* 예시로 수정 내용의 input을 추가 */}
      <input
        type="text"
        name="content"
        value={product.content}
        onChange={changeData}
      />
      {/* 수정 버튼 클릭 시 detailUpdate 함수 호출 */}
      <button onClick={detailUpdate}>수정</button>
    </div>
  );
};
export default Update;

import axios from "axios";
import React, { useCallback, useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../UserContext";

const Update = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const loggedInUserEmail = context.state.userData.email;
  const { product_id } = useParams();
  const [product, setProduct] = useState({
    master_price: "",
    content: "",
  });

  const changeData = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  //변경된 필드만 값 업데이트

  const getData = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:8000/products/detail/" + product_id
      );
      setProduct(resp.data.data);

      // 권한 확인 - 작성자와 로그인한 사용자가 다를 경우 수정 권한이 없음
      if (resp.data.data.email !== loggedInUserEmail) {
        // 권한이 없으면 다른 페이지로 이동(컴포넌트 만들어야 되나?)
        navigate("/unAuthorizedPage");
      }
    } catch (error) {
      console.error("데이터 가져오기 실패", error);
    }
  };

  useEffect(() => {
    getData();
  }, [loggedInUserEmail, product_id]);

  const detailUpdate = async () => {
    try {
      await axios.post("http://localhost:8000/products/update/" + product_id, {
        product,
      });
      navigate("/product/detail/" + product_id);
    } catch (error) {
      console.error("업데이트 실패", error);
    }
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

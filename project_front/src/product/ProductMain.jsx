import { Route, Routes } from "react-router-dom";
import Detail from "./component/Detail";
import Bidding from "./component/Bidding";
import Update from "./component/Update";
import UnAuthorizedPage from "./component/UnAuthorizedPage";
//Timer랑 Table은 Detail 안에 있음

const ProductMain = () => {
  return (
    <div>
      <h2>제품 페이지</h2>
      <Routes>
        <Route path="/detail/:product_id" element={<Detail />} />
        {/* 여기를 detail쪽에서 설정한 변수랑 똑같이 맞춰야되니까 product_id로 */}
        <Route path="/bidding" element={<Bidding />} />
        <Route path="/update/:product_id" element={<Update />} />
        <Route path="/update/unauthorized" element={<UnAuthorizedPage />} />
        {/*  Update 경로 (권한 없을때) */}
      </Routes>
    </div>
  );
};
export default ProductMain;

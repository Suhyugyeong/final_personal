import { Route, Routes } from "react-router-dom";
import Detail from "./component/Detail";
import Bidding from "./component/Bidding";
import Update from "./component/Update";

const ProductMain = () => {
  return (
    <div>
      <h2>제품 페이지</h2>
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/bidding" element={<Bidding />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
};
export default ProductMain;

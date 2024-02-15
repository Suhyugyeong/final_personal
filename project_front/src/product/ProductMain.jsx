import { Route, Routes } from "react-router-dom";

// 준영님
import ProductList from "./component/productlist";
import ProductBuy from "./component/productbuy";

// 유경님
import Detail from "./component/Detail";
import Bidding from "./component/Bidding";
import Update from "./component/Update";
//Timer랑 Table은 Detail 안에 있음
import Pay from "./component/Pay"; //0207 pay 추가 (가짜)

const ProductMain = () => {
  return (
    <>
      <Routes>
        <Route path="/list" element={<ProductList />} />
        <Route path="/buy" element={<ProductBuy />} />
        <Route path="/detail/:product_id" element={<Detail />} />
        {/* 여기를 detail쪽에서 설정한 변수랑 똑같이 맞춰야되니까 product_id로 */}
        <Route path="/bidding/:product_id" element={<Bidding />} />
        {/* 0208 :product_id 추가함 */}
        {/* <Route path="/update/:product_id" element={<Update />} /> */}
        {/* 여기서 /:product_id를 붙이면 아예 수정 화면이 안 뜨는데.. useParams 문제인 것 같긴한데.. */}
        <Route path="/update" element={<Update />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </>
  );
};
export default ProductMain;

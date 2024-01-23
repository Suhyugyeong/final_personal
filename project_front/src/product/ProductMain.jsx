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
        {/* biddingTable이 detail 페이지 내부에 만들어지는데... 이걸 새 component로 만들어야 하는지,
        아니면 그냥 Detail 안쪽에 테이블을 넣으면 되는지, 
      detail페이지의 수정은 Update로 따로 만들어야겠지?*/}
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
};
export default ProductMain;

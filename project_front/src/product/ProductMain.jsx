import { Route, Routes } from "react-router-dom";
import ProductList from "./component/ProductList";
import Detail from "./component/Detail";

const ProductMain = () => {
  return (
    <div>
      <h2>제품 Main</h2>
      <Routes>
        <Route path="/list" element={<ProductList />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};
export default ProductMain;

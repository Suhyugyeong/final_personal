import { Routes, Route } from "react-router-dom";
import ProductMain from "./product/ProductMain";

const App = () => {
  return (
    <div>
      {/* header랑 footer 아직 없으니까 
      /products/*로 해야할지? /product/*로 해야할지? */}
      <Routes>
        <Route path="/products/*" element={<ProductMain />} />
      </Routes>
    </div>
  );
};

export default App;

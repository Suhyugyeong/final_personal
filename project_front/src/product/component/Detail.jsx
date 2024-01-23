//여기 페이지에서 입찰하기 클릭하면 bidding
import {Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import React, {useCallback, useState, useEffect} from "react"
// import Detail = ({DetailData})=>{
//     return(
//         <div>
//         {/* 상품 세부 정보 표시 부분 */}
//         <h2>Product Detail</h2>
//         {/* 기존 상품 세부 정보 표시 내용 */}
        
//         {/* 추가된 내용을 위한 테이블 */}
//         <ProductTable productData={productDetailData.additionalData} />
//       </div>
//     )
// }

const Detail = () => {
    const navigate = useNavigate()
    const {product_id} = useParams()
    const [product, setProduct] = useState({
        title:"",
        email:"",
        picture:"",
        master_price:"",
        auctuon_id:"",
        endtime:"",
        auction_status:"",
        isbn :"",
        content:"",
        cnt:"",
        createAt: "",
    })

const getDetail = async () => {
    const resp =await axios.get("http://localhost:8000/products/detail/" + product_id);
    setProduct(resp.data.data)
}
useEffect(()=>{
    getDetail();
},[]);
return(
//여기 html
);
};

export default Detail;
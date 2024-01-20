import {Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import React, {useCallback, useState, useEffect} from "react"

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
    const resp =await axios.get("http://localhost:8000/products/detail/" + id);
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
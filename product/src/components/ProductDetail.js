import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import {
  Link
} from "react-router-dom";
const ProductDetail = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [ThisProduct,setPro] = useState({});
  console.log(ThisProduct)
useEffect(
  ()=>{axios.get("http://localhost:8000/api/product/"+id).then((res)=>{
    setPro(res.data)
    
  }) }, [])



const deleteProduct = (productId) => {
  props.removeFrom(productId);
  navigate("/products")
}
  return (
    <div>
     
     <h1>{ThisProduct.title}</h1>
     <h1>Price: ${ThisProduct.price}</h1>
     <h1>Description: {ThisProduct.description}</h1>

     <Link to={"/product/" + ThisProduct._id + "/edit"}>
    Edit
</Link>
<button onClick={(e)=>{deleteProduct(ThisProduct._id)}}>
                        Delete
                    </button>

{/* <button onClick={(e)=>{deleteProduct(ThisProduct._id)}}>Delete</button> */}


    </div>
  )
}

export default ProductDetail;

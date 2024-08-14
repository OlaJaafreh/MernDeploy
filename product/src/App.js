import React from 'react';
import { useEffect, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import axios from 'axios'
import Main from './components/Main.js';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductDetailEdit from './components/ProductDetailEdit.js'

function App() {
  const [listofproducts, setListOfProducts] = useState([])
  const [loaded,setLoaded] = useState(false)


  const MyList = (product) => {
  setListOfProducts([...listofproducts, product])
}

  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((res) => {
      setListOfProducts(res.data)
      console.log(res.data)
      setLoaded(true);
    }).catch((err) => {
      console.log(err);
    })


  }, [])

  const removeFromDom = productId => {
    setListOfProducts(listofproducts.filter(product => product._id != productId));
}

const handleDelete = (pId) => {
  axios.delete('http://localhost:8000/api/product/' + pId + '/delete')
      .then(res => {
          removeFromDom(pId)
      })
      .catch(err => console.error(err));
  
}



  return (
    <div className="App">
     
        <Routes>
          <Route path="/products" element={<> <Main productAdd={MyList} /> <ProductList loaded={loaded} productsMy={listofproducts} removeFromDom={handleDelete}/></>} />
          <Route path="/product/:id" element={<ProductDetail removeFrom={handleDelete}/>} />
          <Route path="/product/:id/edit" element={<ProductDetailEdit/>} />
          
        </Routes>
    
    </div>
  );
}

export default App;

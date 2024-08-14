import React, { useState } from 'react';
import axios from 'axios';

const Main = (props) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/product', {
      title,
      price,
      description
    })
    .then(res => {
      console.log(res);
        props.productAdd(res.data)
      setTitle('');
      setPrice('');
      setDescription('');
    })
    .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Product Manager</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div>
          <label>Price:</label>
          <input 
            type="number" 
            value={price}
            onChange={(e) => setPrice(e.target.value)} 
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Main;
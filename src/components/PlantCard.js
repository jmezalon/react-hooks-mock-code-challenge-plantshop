import React, { useState } from "react";

function PlantCard({ plantObj: {name, image, price}, plantObj, onDeleteClick, onEditPriceSubmit }) {
  const [stock, setStock] = useState(true)
  const [editClick, setEditClick] = useState(false)
  const [newPrice, setPrice] = useState("")

  function handleOnDeleteClick() {
    fetch(`http://localhost:6001/plants/${plantObj.id}`,{
      method: 'DELETE'
    })
    .then(
      () => onDeleteClick(plantObj)
    )
  }

  function handleEditSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plantObj.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ price: newPrice })
    })
    .then(r => r.json())
    .then(newprice => onEditPriceSubmit(newprice))
    setEditClick(false)
  }

  return (
    <li className="card">
      <img 
        src={image || "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/394/010/datas/gallery.jpg"} 
        alt={name} 
      />
      <h4>{name}</h4>
      <p>Price: $ {price}</p>
      <form onSubmit={handleEditSubmit}>
        {
          editClick ? 
            <input 
              type="number"
              step="0.01" 
              placeholder="new price" 
              value={newPrice || price} 
              onChange={e => setPrice(parseFloat(e.target.value))} 
            /> :
          null
        }
        {editClick ? <button>Save New Price</button> : null} 
      </form>  
      {stock ? (
        <button onClick={() => setStock(!stock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setStock(!stock)}>Out of Stock</button>
      )}
      {
        !editClick ? 
          <button 
            className="edit-button" 
            onClick={()=>setEditClick(true)}
          >
            New Price
          </button> : 
          <button className="edit-button" onClick={()=>setEditClick(false)}>
            Cancel
          </button>
        }
        <input 
          style={{background: 'pink'}}
          type="button" 
          id="delete-button"
          onClick={handleOnDeleteClick}
          value="🗑️" 
        />
    </li>
  );
}

export default PlantCard;

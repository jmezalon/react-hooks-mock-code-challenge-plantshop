import React from "react";

function NewPlantForm(
  { 
    onHandleSubmit, 
    onHandleChange, 
    formData: { name, image, price } 
  }
  ) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onHandleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={onHandleChange} 
          name="name" 
          placeholder="Plant name" 
        />
        <input 
          type="text" 
          value={image} 
          onChange={onHandleChange} 
          name="image" 
          placeholder="Image URL" 
        />
        <input 
          type="number" 
          value={price} 
          onChange={onHandleChange} 
          name="price" 
          step="0.01" 
          placeholder="Price" 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

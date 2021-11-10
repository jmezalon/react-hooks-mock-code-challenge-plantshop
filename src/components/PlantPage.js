import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: ""
  })
  const base_url = 'http://localhost:6001/plants'

  useEffect(()=>{
    fetch(base_url)
    .then(r => r.json())
    .then(setPlants)
  },[])

  function handleAddSubmit(e) {
    e.preventDefault()
    
    fetch(base_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(newPlant => setPlants([newPlant, ...plants]))

    setFormData({
      name: "",
      price: "",
      image: ""
    })
  }

  function handleFormChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleSearchChange(e) {
    setSearch(e.target.value)
  }
  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  function handleDeleteClick(plantObj) {
    const updatedPlants = plants.filter(plant => plant.id !== plantObj.id)
    setPlants(updatedPlants)
  }

  function handleUpdatePrice(plantObj) {
    const updatedPlant = plants.map(plant => {
      if (plantObj.id === plant.id) {
        return plantObj
      } else {
        return plant
      }
    })
    setPlants(updatedPlant)
  }

  return (
    <main>
      <NewPlantForm 
        formData={formData} 
        onHandleChange={handleFormChange} 
        onHandleSubmit={handleAddSubmit} 
      />
      <Search 
        onHandleSearchChange={handleSearchChange} 
        search={search} 
      />
      <PlantList 
        onEditPriceSubmit={handleUpdatePrice} 
        onDeleteClick={handleDeleteClick} 
        plantsData={filteredPlants} 
      />
    </main>
  );
}

export default PlantPage;

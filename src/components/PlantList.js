import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsData, onEditPriceSubmit, onDeleteClick }) {
  return (
    <ul className="cards">
      {
        plantsData.map(plant => <PlantCard 
          key={plant.id} 
          plantObj={plant} 
          onDeleteClick={onDeleteClick}
          onEditPriceSubmit={onEditPriceSubmit} 
        />)
      }
    </ul>
  );
}

export default PlantList;

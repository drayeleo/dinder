import { useState } from "react";

export default function SavedMeal({ meal }) {
  const [showDetails, setShowDetails] = useState(false)

  function handleClick() {
    setShowDetails(!showDetails)
  }

  function renderRestaurantDetails() {
    return(
      <div> 
        <p>Restaurant Name: {meal.restaurant.name}</p>
        <p>Address: {meal.restaurant.address}</p>
        <p>Phone Number: {meal.restaurant.phone_number}</p>
      </div>
    )
  }

  return (
    <div onClick={handleClick}>
        <img style={{width: "200px"}} src={meal.image} alt={meal.name} />
        <h3 key={meal.id} >{meal.name}</h3>
        {showDetails ? renderRestaurantDetails() : null }
    </div>
  );
}
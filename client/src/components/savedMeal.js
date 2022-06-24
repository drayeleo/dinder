import { useState } from "react";
import { useOutletContext } from "react-router-dom";


export default function SavedMeal({ meal }) {
  const [showDetails, setShowDetails] = useState(false)
  const [user, setUser] = useOutletContext();


  function handleClick() {
    setShowDetails(!showDetails)
  }

  function handleDelete() {
    fetch(`/user_meals/${user.id}?meal_id=${meal.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => {
      if (res.ok) {
        setUser((user)=> { 
          let meals = user.meals.filter((item) => item.id !== meal.id);
          return {...user, meals}
        })
      } else {
          res.json()
          .then(json => console.log("Failed to delete!"))
      }
    })
      .catch((err) => console.log("🔥", err))
  }

  function renderRestaurantDetails() {
    return(
      <div> 
        <p>{meal.restaurant.name}</p>
        <p>{meal.restaurant.address}</p>
        <p>{meal.restaurant.phone_number}</p>
      </div>
    )
  }

  return (
    <div>
      <div className="savedMeal" onClick={handleClick}>
        <img src={meal.image} alt={meal.name} />
        {/* style={{width: "200px"}} */}
        <h3 key={meal.id} >{meal.name}</h3>
        {showDetails ? renderRestaurantDetails() : null }
      </div>
      <button className="formButton addButton" onClick={handleDelete} type="button"> delete </button>
    </div>
    
  );
}

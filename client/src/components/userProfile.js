import { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

export default function UserProfile() {
  const [user, setUser] = useOutletContext();

  let navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // console.log("navigating to homepage")
      navigate("/");
    }
  }, [user]);

  console.log(user)
  console.log("This is user")
  function renderMeals() {
    return user.meals.map((meal) => {
      return <h3 key={meal.id} >{meal.name}</h3>;
    });
  }

  if(user) {
    return (
      <div>
        <h1>User Profile</h1>
        <h2>Hello, {user.first_name}!</h2>
        <h3>Here are your saved meals:</h3>
        {renderMeals()}
      </div>
    );
  } else {
    return null;
  }
  
}

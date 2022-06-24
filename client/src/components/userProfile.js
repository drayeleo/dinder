import { useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import SavedMeal from "./savedMeal";

export default function UserProfile() {
  const [user, setUser] = useOutletContext();
  let navigate = useNavigate();


  useEffect(() => {
    if (!user) {
      // console.log("navigating to homepage")
      navigate("/");
    }
  }, [user]);
  function renderMeals() {
    return user.meals.map((meal) => {
      return (<SavedMeal meal={meal} key={meal.id} />);
    });

  }

  if(user) {
    return (
      <div>
        <h1>User Profile</h1>
        <h2>Hello, {user.first_name}!</h2>
        {user.meals[0] ? <h3>Here are your saved meals:</h3> : <h3>You haven't liked any meals yet</h3> }
        
        {renderMeals()}
      </div>
    );
  } else {
    return null;
  }
  
}

import { useState, useEffect } from 'react';
import MealCard from "./mealCard"

function MealCards(){
    const [mealData, setMealData] = useState({});
    useEffect(() => {
        fetch("/meals")
          .then((r) => r.json())
          .then(setMealData);
      }, []);
      console.log(mealData);
    const renderMeals = mealData.map((meal) => {
        return (
          <MealCard
            meal={meal}
          />
        );
    })
}
export default MealCards
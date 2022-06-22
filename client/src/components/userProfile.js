// import { getInvoices } from "../../data";
import { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

export default function UserProfile() {
  const [user, setUser] = useOutletContext();
  // const [usermeals, setUserMeals] = useState([]);

  let navigate = useNavigate();

  // if (!user) {
  //   navigate("/");
  // }

  // useEffect(() => {
  //   fetch(`/users/${user.id}/meals`)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  //   // fetch(`/users/${user.id}/meals`).then((response) => {
  //   //   if (response.ok) {
  //   //     response.json().then((user) => setUser(user));
  //   //   }
  //   // });
  // }, []);
  function renderMeals() {
    return user.meals.map((meal) => {
      return <h3>{meal.name}</h3>;
    });
  }

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Hello, {user.first_name}!</h2>
      <h3>Here are your saved meals:</h3>
      {renderMeals()}
    </div>
  );
}

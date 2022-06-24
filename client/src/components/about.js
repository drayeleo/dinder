import React from 'react'

export default function About() {
  return (
    <main style={{ padding: "1rem 0",
    
    }}>
      <div className="aboutInfo">
      <h2 className= "firstAboutText" >About Us</h2>
      <p className=" firstAboutText">Dinder is your ticket to the next best meal of your life.  </p>
      <p className="aboutText">Bored? Uninspired? Indecisive? We've got you.</p>
      <p className="aboutText">Just swipe through the app to explore the best that Denver's food scene has to offer.</p>
      <p className="aboutText">👉Left swipe means "No Thanks", right swipe is "YES PLEASE"👈</p>
      <p className="aboutText">And then, we'll save all your liked meals so you can come back to them again and again!</p>
      <p> </p>

      <img className = "cardImage" src={"https://images.squarespace-cdn.com/content/v1/5d470dcc378ddd0001be6494/1575259630827-YCS94X5L6RCKNQGZG2ZU/sinfully-wright-fork-knife-gif.gif"} />
      
      {/* <p></p>
      <p></p> */}
</div>
  {/* <footer>
    Dinder
  </footer> */}
    </main>
    
  );
}
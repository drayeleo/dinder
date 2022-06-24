import React, { useState, useEffect, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import { useOutletContext } from "react-router-dom";


function MealCards () {
    const [templates, setTemplates] = useState([]);
    const [user, setUser] = useOutletContext();

    useEffect(() => {
        fetch("/meals")
        .then(res => res.json())
        .then(data => {
          setTemplates(data);
        })
      }, []);
  const db = templates
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, meal_id, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
    if (direction == "right") {
      add_like_meal(user.id, meal_id)
    }
  }

  const add_like_meal = (user_id, meal_id) => {
    fetch("/user_meals", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: user_id,
        meal_id: meal_id
      })
    })
    .then(res => {
        if (res.ok) {
            res.json()
            .then(userMeal => {
                console.log("Successfully inserted!")
                console.log("userMeal: ", userMeal )
               // let meals = [...user.meals, userMeal.meal];
                // debugger                
                // () => setUser({...user, meals});
                //setUser({...user, meals})
                setUser((user)=> { 
                  let meals = [...user.meals, userMeal.meal];
                  return {...user, meals}
                }
                )
            })
        } else {
            res.json()
            .then(json => console.log("Failed to insert!"))
        }
    })
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
    console.log(`swiped ${dir}!`)
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div>
      <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
      <h1></h1>
      <div className='cardContainer'>
        {db.map((meal, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={meal.id}
            onSwipe={(dir) => swiped(dir, meal.name, meal.id, index)}
            onCardLeftScreen={() => outOfFrame(meal.name, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + meal.image + ')' }}
              className='card'
            >
              <h3>{meal.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='buttons'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>No Thanks!</button>
        <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>YES PLEASE!</button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
    </div>
  )
}

export default MealCards
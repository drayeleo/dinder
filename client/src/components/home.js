import React from 'react';
import MealCards from './mealCards';
// import './App.css';
import '../App.css';

export default function HomePage() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>HomePage</h2>
      <MealCards/>
    </main>
  );
}

import React from 'react';
import './App.css';
import Meal from './Components/Meal';
import { Route, Routes } from 'react-router-dom';
import RecipeInfo from './Components/RecipeInfo';





function App() {
  
  return (
    <>
    <Routes>
     <Route path='/'element={<Meal />}></Route>
     <Route path='/:MealId' element={<RecipeInfo/>}></Route>
     
     

    </Routes>
    
    </>
  );
}

export default App;

import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeInfo = () => {
  const {MealId} = useParams()
  const [item,setItem] = useState()
  if(MealId!=="")
  {
      
    fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`).then(res=>res.json()).then(data=>{
      setItem(data.meals[0])
    })
  }
  return (
    <div className='bg-warning d-flex'>
      {
        (!item)?"":(<>
        <div className='content'>
          <img src={item.strMealThumb} alt='...' height={400} width={620}/>
          <div className='inner-content'>
            <h1>{item.strMeal}</h1>
            <h4>{item.strArea}Food</h4>
            <h3>category {item.strCategory}</h3>
          </div>
        </div>
        <div className='recipedetails '>
          <div className='ingredients '>
                <h3 className='ms-4 '>Ingredients</h3>
                <h6  className='ms-4'>{item.strIngredient1}:{item.strMeasure1}</h6>
                <h6  className='ms-4'>{item.strIngredient4}:{item.strMeasure4}</h6>
                <h6  className='ms-4'>{item.strIngredient3}:{item.strMeasure3}</h6>
                <h6  className='ms-4'>{item.strIngredient4}:{item.strMeasure4}</h6>
                <h6  className='ms-4'>{item.strIngredient4}:{item.strMeasure4}</h6>
                <h6  className='ms-4'>{item.strIngredient6}:{item.strMeasure6}</h6>
                <h6  className='ms-4'>{item.strIngredient7}:{item.strMeasure7}</h6>
                <h6  className='ms-4'>{item.strIngredient8}:{item.strMeasure8}</h6>
          </div>
          <div className='instruction '>
             <h3 className='text-center'>Instructions</h3>
             <h6>{item.strInstructions}</h6>
          </div>
        </div>
        </> )
      }
  </div>
  )
}

export default RecipeInfo
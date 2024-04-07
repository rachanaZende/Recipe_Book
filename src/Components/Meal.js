import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import MealItem from './MealItem'


const Meal = () => {
  const [url,setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a")
  const[item,setItem] = useState();
  const[show,setShow] = useState(false)
  const[search,setSearch] = useState("")
  useEffect(()=>{
    fetch(url).then(res=>res.json()).then(data=>{
      console.log(data.meals)
      setItem(data.meals)
      setShow(true)
    })
  },[url])

  const searchRecipe = ()=>{
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }
  return (
 <> 
    <div className='main bg-warning text-center'>
      <div className='heading'>
        <h1> Recipe Book </h1>
        
      </div>
      <div className='searchBox '>
          <input type="search" className='search-bar rounded-3' placeholder='Recipe name' onChange={e=>setSearch(e.target.value)}
          onKeyPress={searchRecipe}/>
          
      </div>
      
    </div>
   
      {
        show ?      <MealItem data={item}/> : "Not found"

      }
      
        
      
      
 </>
  )
}

export default Meal

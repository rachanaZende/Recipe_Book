import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'




const MealItem = ({ data }) => {

    console.log(data)
    const navigate = useNavigate()
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (recipe) => {
        setFavorites(prevFavorites => [...prevFavorites, recipe]);
    }

    return (
        <div>
            <div className='container d-flex m-5  '>
                <div className='row '>
                    {data && data.map(item => (
                        <div className='col-sm-3 mb-4' key={item.idMeal}>
                            <div className="card w-100 rounded-5  " >
                                <img src={item.strMealThumb} className="card-img-top rounded-5 " alt="..." />
                                <div className="card-body  ">
                                    <h5 className="card-title"  >{item.strMeal}</h5>
                                    <button type='button' className="btn btn-primary" onClick={() => navigate(`/${item.idMeal}`)}>Recipe</button>
                                    <button type="button" className="btn btn-warning" onClick={() => addToFavorites(item)}>Favorite</button>

                                </div>
                            </div>
                        </div>
                    )
                    )

                    }

                </div>
            </div>


            <div> {favorites.length > 0 && (
                <div className="container mt-4"> {/*  container for favorite recipes */}
                    <div className="row">
                        <div className="col">
                            <h3>Favorite Recipes</h3>
                            <ul>
                                {favorites.map((favorite, index) => (
                                    <li key={index}>{favorite.strMeal}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}</div>
        </div>
    )
}

export default MealItem

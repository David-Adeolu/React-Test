import axios from "axios";
import { useState } from "react";
// import React,{useSate} from "react";

const Api = ()=> {
    // const [users, setusers]= useSate([])
    // const [food, setfood]= useSate([])
    const [food, setfood] = useState([])
    let endpoint =  `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
const getData =()=>{
    axios.get(endpoint)
    .then((response)=>{
        setfood(response.data.meals)
        console.log(response.data.meals);

    })
    .catch((err)=>{
        console.log(err);
    })
}

return (
<>
<button onClick={getData}>getData</button>
<input type="text" placeholder='enter Food Name' onChange={(e)=> setfood(event.target.value)}/>
{
    food.map((items, index)=>(
        <div key={index}>
            <h1>{items.idMeal}</h1>
            <h1>{items.strArea}</h1>
            <h1>{items.strCategory}</h1>
            <h1>{items.strIngredient1}</h1>
            <img src={items.strMealThumb
} alt="" style={{width: '200px'}} />
        </div>
    ))
}
</>
)
}

export default Api
import classNames from 'classnames';
import React, {useState} from 'react'
import "./AddNahrungInput.css"

function AddNahrungInput({setIsFilled, isFilled, value, setValue, setCalories}) {

    const [openedRecommendations, setOpenedRecommendations] = useState(false);
    const [matchingValues, setMatchingValues] = useState([]);
    const content = require("../../../JSON/all-food.json")
    
    const handleRecommendationOnClick = (e)=>{
        console.log(e.target.getElementsByTagName("span")[0].getAttribute("value"));
        setCalories(e.target.getElementsByTagName("span")[0].getAttribute("value"));
        setValue(e.target.value);
        setOpenedRecommendations(false);
        setIsFilled(true);

    }

    const getRecommendations = (e)=>{
        setValue(e.target.value);
        var matchValues= [];
        for(var x = 0; x<content.length; x++){
            if(content[x].name.toLowerCase().includes(e.target.value.toLowerCase())){
                matchValues.push(content[x])
            }
        }
        if(isFilled){
            setIsFilled(false);
        }
        setMatchingValues(matchValues);
        if(!openedRecommendations){
            setOpenedRecommendations(true);
        }
    }
    const renderRecommendations = matchingValues.map((food)=>{
        return(
            <button className="recommendation" value={food.name} onClick={(e)=>handleRecommendationOnClick(e)} key={Math.random()}>
                {food.name} <span className="show-calorie" value={food.calories}>({food.calories} kcal)</span>
            </button>
        )
    })
  return (
        <div className="add-nahrung-input-container">
            <input className="add-nahrung-input" type="text" onChange={(e)=>getRecommendations(e)} value={value}></input>
            <div className={classNames({
                "add-nahrung-recommendations": true,
                "opened-recommendations": openedRecommendations
            })}>
                {renderRecommendations}
            </div>
        </div>
  )
}

export default AddNahrungInput
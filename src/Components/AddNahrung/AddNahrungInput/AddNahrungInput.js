import classNames from 'classnames';
import React, {useState} from 'react'
import "./AddNahrungInput.css"

function AddNahrungInput({setIsFilled, isFilled, value, setValue}) {

    const [openedRecommendations, setOpenedRecommendations] = useState(false);
    const [matchingValues, setMatchingValues] = useState([]);
    const content = [
        "nudeln",
        "nuudeln",
        "nuuuudeln",
        "kekse",
        "test",
        "nudeln",
        "nuudeln",
        "nuuuudeln",
        "kekse",
        "test"
    ]
    
    const handleRecommendationOnClick = (e)=>{
        console.log(e.target.value)
        setValue(e.target.value);
        setOpenedRecommendations(false);
        setIsFilled(true);
    }

    const getRecommendations = (e)=>{
        setValue(e.target.value);
        var matchValues= [];
        for(var x = 0; x<content.length; x++){
            if(content[x].includes(e.target.value)){
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
    const renderRecommendations = matchingValues.map((value)=>{
        return(
            <button className="recommendation" value={value} onClick={(e)=>handleRecommendationOnClick(e)}>
                {value}
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
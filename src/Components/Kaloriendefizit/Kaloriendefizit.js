import React, {useState, useEffect} from 'react'
import "./Kaloriendefizit.css"

function Kaloriendefizit({height, weight, sex, age, editMode}) {
  const [formel, setFormel] = useState(0);

  useEffect(()=>{
    if(sex==="männlich"){
      if(age<19){
        setFormel((0.074*weight+2.754)*239)
      }else if(age<31){
        setFormel((0.063*weight+2.896)*239)
      }else if(age<61){
        setFormel((0.048*weight+2.653)*239)
      }else if(age>60){
        setFormel((0.049*weight*2.459)*239)
      }
    }
    if(sex==="weiblich"){
      if(age<19){
        setFormel((0.056*weight+2.898)*239)
      }else if(age<31){
        setFormel((0.062*weight+2.036)*239)
      }else if(age<61){
        setFormel((0.034*weight+2.538)*239)
      }else if(age>60){
        setFormel((0.038*weight*2.755)*239)
      }
    }
  }, [height, weight, sex, age])
  return (
    <div className="kaloriendefizit">
      <div className="kaloriendefizit-ausgangsdaten">
          <div className="kaloriendefizit-ausgangsdaten-container">
            <p className="grundumsatz-headline">Ihr Grundumsatz</p>
            <p className="grundumsatz-subheadline">in kcal</p>
            <h1 className="grundumsatz">{formel.toFixed(1)}</h1>
          </div>
          <div className="kaloriendefizit-ausgangsdaten-container">
            <p className="grundumsatz-headline">Ihr Gesamtumsatz</p>
            <p className="grundumsatz-subheadline">in kcal</p>
            <h1 className="grundumsatz">2494</h1>
          </div>
          <div className="kaloriendefizit-ausgangsdaten-container">
            <p className="grundumsatz-headline">Ihr Grundumsatz</p>
            <p className="grundumsatz-subheadline">in kcal</p>
            <h1 className="grundumsatz">{formel.toFixed(1)}</h1>
          </div>
          {editMode? <input type="checkbox">test</input>: ""}
      </div>
    </div>
  )
}

export default Kaloriendefizit
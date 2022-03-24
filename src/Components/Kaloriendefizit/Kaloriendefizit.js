import React, {useState, useEffect} from 'react'
import "./Kaloriendefizit.css"

function Kaloriendefizit({height, weight, sex, age, editMode}) {
  const [formel, setFormel] = useState(0);
  const [factor, setFactor] = useState([0.95, "Schlafend"]);
  var activityText;
  console.log(factor);

  const handleActivityChange = (e)=> {
    if(e.target.value==="0.95"){
      activityText="Schlafend";
    }else if(e.target.value==="1.2"){
      activityText="Nur sitzend, liegend";
    }else if(e.target.value==="1.45"){
      activityText="Sitzend, kaum körperliche Aktivität";
    }else if(e.target.value==="1.65"){
      activityText="Überwiegend sitzend, gehend und stehend";
    }else if(e.target.value==="1.85"){
      activityText="Hauptsächlich stehend und gehend";
    }else if(e.target.value==="2.2"){
      activityText="Körperlich anstrengende Arbeit";  
    }
    setFactor([e.target.value, activityText]);
  }

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
            <h1 className="grundumsatz">{(formel.toFixed(1)*factor[0]).toFixed(1)}</h1>
          </div>
          <div className="kaloriendefizit-ausgangsdaten-container">
            <p className="grundumsatz-headline">Max. Kaloriendefizit</p>
            <p className="grundumsatz-subheadline">in kcal</p>
            <h1 className="grundumsatz">{((formel.toFixed(1)*factor[0]).toFixed(1)-formel.toFixed(1)).toFixed(1)}</h1>
          </div>
      </div>
          {editMode? 
            <div className="helper"><p className="text activity-dropdown-text">Ihr Aktivitätsgrad</p>
            <select name="" id="activities" onChange={(e)=>handleActivityChange(e)} className="activity-dropdown" value={factor[0]}>
              <option className="activity-dropdown-option" value="0.95">Schlafend</option>
              <option className="activity-dropdown-option" value="1.2">Nur sitzend, liegend</option>
              <option className="activity-dropdown-option" value="1.45">Sitzend, kaum körperliche Aktivität</option>
              <option className="activity-dropdown-option" value="1.65">Überwiegend sitzend, gehend und stehend</option>
              <option className="activity-dropdown-option" value="1.85">Hauptsächlich stehend und gehend</option>
              <option className="activity-dropdown-option" value="2.2">Körperlich anstrengende Arbeit</option>
            </select>
            </div>
            : <div className="activity-container"><p className="text activity-dropdown-text">Ihr Aktivitätsgrad</p><p className="activity-dropdown-paragraph">{factor[1]}</p></div>}
    </div>
  )
}

export default Kaloriendefizit
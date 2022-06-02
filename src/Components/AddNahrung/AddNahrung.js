import React, {useState} from 'react'
import "./AddNahrung.css"
import classnames from "classnames";
import AddNahrungInput from './AddNahrungInput/AddNahrungInput';


function AddNahrung({activeDate, nahrungsliste, setNahrungsliste, setActiveDate}) {

    const [isOpened, setIsOpened] = useState(false);
    const [portions, setPortions] = useState(1);
    const [isFilled, setIsFilled] = useState(false);
    const [inputDate, setInputDate] = useState(activeDate);
    const [value, setValue] = useState("");
    const [preselectedFood, setPreselectedFood] = useState(true);
    const [calories, setCalories] = useState(0);

    const handlePresetFoodToggle = () => {
      setPreselectedFood(!preselectedFood);
      setPortions(1);
      setIsFilled(false);
      setInputDate(activeDate);
      setValue("");
      setCalories(0);
    }

    const handleAddToList = ()=>{
      var nrg = value;
      var port = portions;
      var clr = calories;
      var nrglst = nahrungsliste;
      var testing = false;
      if(nrg!=="" && port && clr!==0){
        for(var x= 0; x<nrglst.length;x++){
          if(nrglst[x].date===inputDate){
            nrglst[x].nahrung.push({name: nrg, anzahl: port, kalorien: clr})
            testing=true;
          }
        }
      }
      if(testing===false){
        nrglst.push({date: inputDate, nahrung: [{name: nrg, anzahl: port, kalorien: clr}]})
        nrglst.sort((a, b)=>{
          let da = new Date(a.date);
          let db = new Date(b.date);
          return da - db;
        });
      }
      setNahrungsliste(nrglst);
      setInputDate(activeDate);
      setPortions(1);
      setValue("");
      setIsFilled(false);
      setIsOpened(false);
      setCalories(0);
      setActiveDate("9999-01-01");
      setTimeout(()=>{
        setActiveDate(activeDate);
      }, 50)
    }

    const handleNewFood = (e)=>{
      setValue(e.target.value);
      if(!isFilled){
        setIsFilled(!isFilled);
      }else if(e.target.value===""){
        setIsFilled(false);
      }
    }
    
    const handleOnClick = function(){
      if(isOpened){
        setInputDate(activeDate);
        setPortions(1);
        setValue("");
        setIsFilled(false);
      }
        setIsOpened(!isOpened);
    }

  return (
    <div className="add-nahrung">
        <div className={classnames({
            "add-nahrung-configuration": true,
            "is-opened-configurator": isOpened
        })}>
          <h3 className="add-nahrung-headline">MAHLZEIT HINZUFÜGEN</h3>
            <div className="add-nahrung-container">
              {(preselectedFood && 
              <>
              <h4 className="add-nahrung-headline-meal">Mahlzeit</h4>
              <AddNahrungInput setCalories={setCalories} setIsFilled={setIsFilled} isFilled={isFilled} value={value} setValue={setValue}></AddNahrungInput>
              <h4 className="add-nahrung-headline-portion">Portion <br></br><span className="small">(100g/Einheit)</span><div className="information">?<br></br><span className="tooltiptext"><br></br>Einzelnes Nahrungsmittel (BSP. Nudeln) = 100g <br></br><br></br>Zusammengesetzes Nahrungsmittel (BSP. Cheesburger) = ein ganzer Burger bzw. eine Einheit<br></br><br></br></span></div></h4>
              <input type="number" className="add-nahrung-portionen" value={portions} onChange={e=>setPortions(e.target.value)} min="1"></input>
              <h4 className="add-nahrung-headline-portion">Datum</h4>
              <input type="date" className="add-nahrung-datum" value={inputDate} onChange={(e)=>setInputDate(e.target.value)}></input>
              </>
              )
              }
              {(!preselectedFood && 
              <>
                <h4 className="add-nahrung-headline-meal newfood">Mahlzeit</h4>
                <input type="text" name="meal" className="add-nahrung-newfood" onChange={(e)=>handleNewFood(e)} value={value}></input>
                <h4 className="add-nahrung-headline-portion newfood">Kilokalorien <br></br><span className="small">(pro Portion)</span></h4>
                <input type="number" name="kilocalories" value={calories} className="add-nahrung-newfood add-nahrung-newfood-calorie" onChange={(e)=>setCalories(e.target.value)}></input>
                <h4 className="add-nahrung-headline-portion newfood">Portionen</h4>
                <input type="number" name="portions" className="add-nahrung-newfood add-nahrung-newfood-calorie" onChange={(e)=>setPortions(e.target.value)} value={portions}></input>
                <h4 className="add-nahrung-headline-portion newfood">Datum</h4>
                <input type="date" name="date" className="add-nahrung-datum" value={inputDate} onChange={(e)=>setInputDate(e.target.value)}></input>
              </>  
              )
              }
              <button className="toggle-preset-food" onClick={()=>handlePresetFoodToggle()}>{preselectedFood? "Eigenes Essen hinzufügen": "Voreingetragenes Essen hinzufügen"}</button>
            </div>
        </div>
        <button className={classnames({
          "add-nahrung-toggle": true,
          "is-closing-button": isOpened
        })} onClick={()=>handleOnClick()}>+</button>
        <div className={classnames({
          "overlay": true,
          "setBlur": isOpened
        })}></div>
        <button onClick={()=>handleAddToList()} className={classnames({
            "add-to-list-button": true,
            "show-add-button": isFilled
        })}>✓</button>
    </div>
  )
}

export default AddNahrung
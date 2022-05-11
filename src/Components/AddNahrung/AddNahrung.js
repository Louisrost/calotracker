import React, {useState} from 'react'
import "./AddNahrung.css"
import classnames from "classnames";
import AddNahrungInput from './AddNahrungInput/AddNahrungInput';

function AddNahrung({activeDate}) {

    const [isOpened, setIsOpened] = useState(false);
    const [portions, setPortions] = useState(1);
    const [isFilled, setIsFilled] = useState(false);
    const [inputDate, setInputDate] = useState(activeDate);
    const [value, setValue] = useState("");


    const handleOnClick = function(){
      if(isOpened){
        setInputDate(activeDate);
        setPortions(1);
        setValue("");
        setIsFilled(false);
      }
        setIsOpened(!isOpened);
        console.log(isOpened);
    }

  return (
    <div className="add-nahrung">
        <div className={classnames({
            "add-nahrung-configuration": true,
            "is-opened-configurator": isOpened
        })}>
          <h3 className="add-nahrung-headline">MAHLZEIT HINZUFÜGEN</h3>
            <div className="add-nahrung-container">
              <h4 className="add-nahrung-headline-meal">Mahlzeit</h4>
              <AddNahrungInput setIsFilled={setIsFilled} isFilled={isFilled} value={value} setValue={setValue}></AddNahrungInput>
              <h4 className="add-nahrung-headline-portion">Portion</h4>
              <input type="number" className="add-nahrung-portionen" value={portions} onChange={e=>setPortions(e.target.value)} min="1"></input>
              <h4 className="add-nahrung-headline-portion">Datum</h4>
              <input type="date" className="add-nahrung-datum" value={inputDate} onChange={(e)=>setInputDate(e.target.value)}></input>
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
        <button className={classnames({
            "add-to-list-button": true,
            "show-add-button": isFilled
        })}>✓</button>
    </div>
  )
}

export default AddNahrung
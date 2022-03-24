import React from 'react'
import "./Nahrungsliste.css"

function Nahrungsliste() {

    const getCurrentDate = ()=>{
        var date = new Date();
        var currentDate = date.toISOString().slice(0,10);
        return currentDate;
    }
    const blocker = ()=>{
      return false;
    }
  return (
    <div className="nahrungsliste">
        <h1 className="nahrungsliste-headline">Deine Mahlzeiten</h1>
        <input type="date" onKeyPress={()=>blocker()} className="nahrungsliste-datepicker" onChange={()=>getCurrentDate()}></input>
    </div>
  )
}

export default Nahrungsliste
import React from 'react'
import "./Nahrungsliste.css"
import KalorienChart from '../KalorienChart/KalorienChart';

function Nahrungsliste({nahrungsliste, setNahrungsliste, activeDate, setActiveDate, formel, factor}) {
  var activeDay = [];
  var gesamtKcal;
    const blocker = ()=>{
      return false;
    }

    const setNahrung=()=>{
      gesamtKcal=0;
      for(var x=0; x<nahrungsliste.length; x++){
        if(nahrungsliste[x].date===activeDate){
          activeDay = nahrungsliste[x].nahrung;
        }
      }
      for(var y=0; y<activeDay.length; y++){
        gesamtKcal= gesamtKcal+(activeDay[y].kalorien*activeDay[y].anzahl);
      }
    }
    setNahrung();
      
    const getNahrung= activeDay.map((x)=>{
      var key= Math.floor(Math.random() * 100000)
        return (
          <div className="nahrungsmittel-container" key={key}>
            <div className="nahrungsmittel-container--inner">
              <p className="textn nahrungsmittel-name">{x.name}</p>
              <p className="textn nahrungsmittel-menge">Anzahl: {x.anzahl}</p>
            </div>
            <p className="nahrungsmittel-kalorien">{x.kalorien*x.anzahl} kcal</p>
            <button className="nahrungsmittel-loeschen">x</button>
          </div>
        )
      })

  return (
    <div className="nahrungsliste">
        <h1 className="nahrungsliste-headline">Deine Mahlzeiten</h1>
        <input type="date" onKeyPress={()=>blocker()} className="nahrungsliste-datepicker" onChange={(e)=>setActiveDate(e.target.value)} value={activeDate}></input>
        <div className="nahrungsliste-container">
          {getNahrung}
        </div>
        <div className="kaloriendefizit-ausgangsdaten">
          <div className="kaloriendefizit-ausgangsdaten-container">
            <p className="grundumsatz-headline">Nahrung</p>
            <p className="grundumsatz-subheadline">in kcal</p>
            <p className="grundumsatz gesamtkcal">{gesamtKcal+" kcal"}</p>
          </div>
          -
          <div className="kaloriendefizit-ausgangsdaten-container">
            <p className="grundumsatz-headline">Gesamtumsatz</p>
            <p className="grundumsatz-subheadline">in kcal</p>
            <p className="grundumsatz gesamtkcal">{(formel.toFixed(1)*factor[0]).toFixed(1)}</p>
          </div>
          =
          <div className="kaloriendefizit-ausgangsdaten-container">
            <p className="grundumsatz-headline">Kaloriendefizit</p>
            <p className="grundumsatz-subheadline">in kcal</p>
            <p className="grundumsatz gesamtkcal">{-(gesamtKcal-(formel.toFixed(1)*factor[0]).toFixed(1)).toFixed(1)+" kcal"}</p>
          </div>
        </div>
        <KalorienChart nahrungsliste={nahrungsliste}></KalorienChart>
    </div>
  )
}

export default Nahrungsliste
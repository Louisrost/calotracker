import './App.css';
import BMI from "./Components/BMI/BMI"
import React, {useEffect, useState} from "react"
import Kaloriendefizit from './Components/Kaloriendefizit/Kaloriendefizit';
import Nahrungsliste from './Components/Nahrungsliste/Nahrungsliste';
import AddNahrung from './Components/AddNahrung/AddNahrung';

function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [sex, setSex] = useState("männlich");
  const [age, setage] = useState(0);
  const [formel, setFormel] = useState(0);
  const [factor, setFactor] = useState([1.85, "Überwiegend sitzend, gehend und stehend"]);
  const [editMode, setEditMode] = useState(false);
  const [activeDate, setActiveDate] = useState(new Date().toISOString().slice(0,10))
  const [nahrungsliste, setNahrungsliste] = useState([]);
  var nahrungslisteString = JSON.stringify(nahrungsliste);

      // Fetch data from local storage 
      const getStateFromLocalStorage = () => { 
        let data = localStorage.getItem('state'); 
        if(data !== undefined) { 
          var init = JSON.parse(data); 
          console.log(init);
          setHeight(init.height);
          setWeight(init.weight);
          setSex(init.sex);
          console.log(init.nahrungsliste);
          setage(init.age);
          setFactor(init.factor);
          setNahrungsliste(init.nahrungsliste);
        } 
      } 
      useEffect(()=>{
        getStateFromLocalStorage();
      }, [])

    // save data to localStorage 
    const saveStateToLocalStorage = (height, weight, sex, age, factor, nahrungsliste) => { 
      localStorage.setItem('state', JSON.stringify({height: height, weight: weight, sex: sex, age: age, factor: factor, nahrungsliste: nahrungsliste})); 
    } 


    useEffect(()=>{
      if(height>0 && weight > 0 && sex && age>0 && factor && nahrungsliste!==[]){
      saveStateToLocalStorage(height, weight, sex, age, factor, nahrungsliste);
      }
    }, [height, weight, sex, age, factor, nahrungsliste, nahrungslisteString])

  return (
    <div className="App">
      <BMI height={height} setHeight={setHeight} weight={weight} setWeight={setWeight} sex={sex} setSex={setSex} age={age} setage={setage} editMode={editMode} setEditMode={setEditMode}></BMI>
      <hr className="border"></hr>
      <Kaloriendefizit height={height} weight={weight} sex={sex} age={age} editMode={editMode} formel={formel} setFormel={setFormel} factor={factor} setFactor={setFactor}></Kaloriendefizit>
      <hr className="border"></hr>
      <Nahrungsliste nahrungsliste={nahrungsliste} setNahrungsliste={setNahrungsliste} activeDate={activeDate} setActiveDate={setActiveDate} formel={formel} factor={factor}></Nahrungsliste>
      <hr className="border"></hr>
      <AddNahrung activeDate={activeDate} nahrungsliste={nahrungsliste} setNahrungsliste={setNahrungsliste} setActiveDate={setActiveDate}></AddNahrung>
    </div>
  );
}

export default App;

import './App.css';
import BMI from "./Components/BMI/BMI"
import React, {useState} from "react"
import Kaloriendefizit from './Components/Kaloriendefizit/Kaloriendefizit';
import Nahrungsliste from './Components/Nahrungsliste/Nahrungsliste';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [sex, setSex] = useState("männlich");
  const [age, setage] = useState(0);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="App">
      <BMI height={height} setHeight={setHeight} weight={weight} setWeight={setWeight} sex={sex} setSex={setSex} age={age} setage={setage} editMode={editMode} setEditMode={setEditMode}></BMI>
      <hr className="border"></hr>
      <Kaloriendefizit height={height} weight={weight} sex={sex} age={age} editMode={editMode}></Kaloriendefizit>
      <hr className="border"></hr>
      <Nahrungsliste></Nahrungsliste>
    </div>
  );
}

export default App;

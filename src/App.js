import './App.css';
import BMI from "./Components/BMI/BMI"
import React, {useState} from "react"
import Kaloriendefizit from './Components/Kaloriendefizit/Kaloriendefizit';
import Nahrungsliste from './Components/Nahrungsliste/Nahrungsliste';
import AddNahrung from './Components/AddNahrung/AddNahrung';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [sex, setSex] = useState("männlich");
  const [age, setage] = useState(0);
  const [formel, setFormel] = useState(0);
  const [factor, setFactor] = useState([0.95, "Schlafend"]);
  const [editMode, setEditMode] = useState(false);
  const [activeDate, setActiveDate] = useState(new Date().toISOString().slice(0,10))
  const [nahrungsliste, setNahrungsliste] = useState(
    [
      {
        date: "2022-03-24",
        nahrung:[
          {
            name: "Nudeln",
            anzahl: 1,
            kalorien: 800,
          },
          {
            name: "Brötchen",
            anzahl: 4,
            kalorien: 245,
          },
          {
            name: "Ofenkäse",
            anzahl: 1,
            kalorien: 600,
          }
        ]
      },
      {
        date: "2022-03-25",
        nahrung:[
          {
            name: "Käse",
            anzahl: 1,
            kalorien: 400,
          },
          {
            name: "Milch",
            anzahl: 4,
            kalorien: 25,
          },
          {
            name: "RedBull",
            anzahl: 1,
            kalorien: 60,
          },
          {
            name: "Käse",
            anzahl: 1,
            kalorien: 900,
          },
          {
            name: "Milch",
            anzahl: 4,
            kalorien: 295,
          },
          {
            name: "RedBull",
            anzahl: 1,
            kalorien: 700,
          },
        ]
      },
      {
        date: "2022-03-26",
        nahrung:[
          {
            name: "Nudeln",
            anzahl: 1,
            kalorien: 200,
          },
          {
            name: "Brötchen",
            anzahl: 4,
            kalorien: 445,
          },
          {
            name: "Ofenkäse",
            anzahl: 1,
            kalorien: 200,
          }
        ]
      },
      {
        date: "2022-03-27",
        nahrung:[
          {
            name: "Käse",
            anzahl: 1,
            kalorien: 100,
          },
          {
            name: "Milch",
            anzahl: 4,
            kalorien: 145,
          },
          {
            name: "RedBull",
            anzahl: 1,
            kalorien: 420,
          },
          {
            name: "Käse",
            anzahl: 1,
            kalorien: 340,
          },
          {
            name: "Milch",
            anzahl: 4,
            kalorien: 225,
          },
          {
            name: "RedBull",
            anzahl: 1,
            kalorien: 900,
          },
        ]
      },
      {
        date: "2022-03-28",
        nahrung:[
          {
            name: "Nudeln",
            anzahl: 1,
            kalorien: 200,
          },
          {
            name: "Brötchen",
            anzahl: 4,
            kalorien: 265,
          },
          {
            name: "Ofenkäse",
            anzahl: 1,
            kalorien: 230,
          }
        ]
      },
      {
        date: "2022-03-29",
        nahrung:[
          {
            name: "Käse",
            anzahl: 1,
            kalorien: 200,
          },
          {
            name: "Milch",
            anzahl: 4,
            kalorien: 435,
          },
          {
            name: "RedBull",
            anzahl: 1,
            kalorien: 500,
          },
          {
            name: "Käse",
            anzahl: 1,
            kalorien: 100,
          },
          {
            name: "Milch",
            anzahl: 4,
            kalorien: 245,
          },
          {
            name: "RedBull",
            anzahl: 1,
            kalorien: 2340,
          },
        ]
      }
    ]
  )

  return (
    <div className="App">
      <BMI height={height} setHeight={setHeight} weight={weight} setWeight={setWeight} sex={sex} setSex={setSex} age={age} setage={setage} editMode={editMode} setEditMode={setEditMode}></BMI>
      <hr className="border"></hr>
      <Kaloriendefizit height={height} weight={weight} sex={sex} age={age} editMode={editMode} formel={formel} setFormel={setFormel} factor={factor} setFactor={setFactor}></Kaloriendefizit>
      <hr className="border"></hr>
      <Nahrungsliste nahrungsliste={nahrungsliste} setNahrungsliste={setNahrungsliste} activeDate={activeDate} setActiveDate={setActiveDate} formel={formel} factor={factor}></Nahrungsliste>
      <hr className="border"></hr>
      <AddNahrung activeDate={activeDate}></AddNahrung>
    </div>
  );
}

export default App;

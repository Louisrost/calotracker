import { useEffect } from "react";
import "./BMI.css"

function BMI({height, setHeight, weight, setWeight, sex, setSex, age, setage, editMode, setEditMode}) {
    const bmi = weight/((height/100)*(height/100));
    var bmiChartSetup = [0, 0];

    const handleOnClickSex = ()=>{
        if(sex==="männlich"){
            setSex("weiblich");
        }else{
            setSex("männlich");
        }
    }

    const setBmiChart = () => {
        if(sex && age){
        if(sex === "männlich"){
            if(age<25){
                bmiChartSetup=[19, 25]
            }else if(age<35){
                bmiChartSetup=[20, 26]
            }else if(age<45){
                bmiChartSetup=[21, 27]
            }
            else if(age<55){
                bmiChartSetup=[22, 28]
                
            }else if(age<64){
                bmiChartSetup=[23, 29]
            }else{
                bmiChartSetup=[24, 30]
            }
        }else if(sex==="weiblich"){
            if(age<25){
                bmiChartSetup=[18, 24]
            }else if(age<35){
                bmiChartSetup=[19, 25]
            }else if(age<45){
                bmiChartSetup=[20, 26]
            }
            else if(age<55){
                bmiChartSetup=[21, 27]
                
            }else if(age<64){
                bmiChartSetup=[22, 28]
            }else{
                bmiChartSetup=[23, 29]
            }     
        }
        var barMarginleft = (bmiChartSetup[0]/50)*300+"px";
        var barWidth = ((bmiChartSetup[1]-bmiChartSetup[0])/50)*300+"px";
        document.querySelector(".bmi-bar-inner").style.marginLeft= barMarginleft;
        document.querySelector(".bmi-bar-inner").style.width=barWidth;
        document.querySelector(".bmi-bar-inner-value").style.marginLeft=(bmi/50)*300+"px";
    }
    }
    useEffect(()=>{
        setBmiChart()
    }, [height, weight, sex, age], setBmiChart)

    const handleEditModeClick = ()=> {
        setEditMode(!editMode);
        setBmiChart();
    }
  return (
    <div className='bmi'>
        <p className="bmi-headline">Ihr BMI:</p>
        <h1 className="bmi-value">{bmi? bmi.toFixed(1): 0}</h1>
        <div className="editArea">
            <div className="bmi-edit-value-container bmi-age">
                <p className="text">Alter <br></br>
                <span className="bmi-value-description">in Jahren</span></p>
                {editMode ? <input type="number" className="bmi-input bmi-age-value-input" onChange={(e)=>setage(e.target.value)} value={age} min="0" max="0"></input>: <p className="text bmi-age-value">{age}</p>}
            </div>
            <div className="bmi-edit-value-container  bmi-height">
                <p className="text">Körpergröße <br></br>
                <span className="bmi-value-description">in cm</span></p>
                {editMode ? <input type="number" className="bmi-input bmi-height-value-input" onChange={(e)=>setHeight(e.target.value)} value={height} min="0" max="250"></input>: <p className="text bmi-height-value">{height}</p>}
            </div>
            <div className="bmi-edit-value-container bmi-weight">
                <p className="text">Gewicht<br></br>
                <span className="bmi-value-description">in kg</span></p>
                {editMode ? <input type="number" className="bmi-input bmi-weight-value-input" onChange={(e)=>setWeight(e.target.value)} value={weight} min="0" max="400"></input>: <p className="text bmi-weight-value">{weight}</p>}
            </div>
            <div className="bmi-edit-value-container bmi-sex">
                <p className="text">Geschlecht<br></br>
                <span className="bmi-value-description">m/w</span></p>
                {editMode ? <button className="bmi-input bmi-sex-value-input" onClick={()=> handleOnClickSex()} value={sex}>{sex}</button>: <p className="text bmi-sex-value">{sex}</p>}
            </div>
        </div>
        <button className="edit-mode" onClick={()=>handleEditModeClick()}>{editMode ? "Speichern" : "Bearbeiten"}</button>
        <div className="bmi-bar-container">
            <p className="text bmi-bar-text">0</p>
            <div className="bmi-bar bmi-bar-outter">
                <div className="bmi-bar bmi-bar-inner"></div>
                <div className="bmi-bar-inner-value"></div>
            </div>
            <p className="text bmi-bar-text">50</p>
        </div>
    </div>
  )
}

export default BMI
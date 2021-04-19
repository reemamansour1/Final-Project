import React , {useState} from 'react';
import './Page1.css';
function Search() {

  const [input1 , setinput1] = useState(null)

  const [input2 , setinput2] = useState(null)
  const [Click , setClick]= useState('')


  let sentence = ''

  const inputs = (e) => {
    setinput1(e.target.value)
  }

  const inputss = (e) => {
    setinput2(e.target.value)
  }

  const num = (input2/100)*(input2/100)

  let sum = input1/num

  
  if(sum >= 18 & sum <= 25 & sum !== 0)  {
    sentence = ' Your BMI is Normal weight , GOOD JOB . Follow our  website instructions to keep FIT !! '
  }

  if(sum <= 18 & sum !== 0) {
    sentence = ' Your BMI is Under weight , You MUST gain weight . Follow our website instructions And you will SET A RECORD WITH US !! '
  }

  if(sum >= 25 & sum !== 0) {
    sentence = ' Your BMI is Obese ,You MUST to lose weight . Follow our website instructions And you will SET A RECORD WITH US !! '
  }
  const show = () => {
    setClick(sentence)


  }
return (
  <div>
    <div className="title">Healthy LifeStyle</div>
      <div className="App">
        <div className="inputSide">
          <input className = 'input' type="number" autocomplete="off" required  onChange = {inputs} value ={input1} placeholder = 'Write your Weight' />
          <input className = 'input' type="number" autocomplete="off" required onChange = {inputss} value ={input2} placeholder = 'Write your Height' />
          <button className = 'button'onClick = {show}>Submit</button>
          <h3>{Click}</h3>
        </div>
  
    
      
        </div> 
      </div>
       );
}

export default Search;
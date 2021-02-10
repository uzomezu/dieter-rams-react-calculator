import React, {useState, useEffect} from 'react';
import Button from './Button/Button';
import ClearButton from './ClearButton/ClearButton';
import EqualsButton from './EqualsButton/EqualsButton';


function Calculator(props){

  const [input, setInput] = useState('');
  const [prevNum, setPrevNum] = useState('');
  const [curNum, setCurNum] = useState('');
  const [operator, setOperator] = useState('');
  const clickButton = (e) => {
      if(e==="+" || e==='-' ||e=== '/' ||e=== '*'){
        setOperator(e)
        console.log(e);
      } else {
        
        setInput(input + e);
        console.log(input);
      }  

  }
  const handleClear = () =>{
      setInput('');
      setPrevNum('');
      setCurNum('');
      setOperator('');
  }
  const addZeroToInput = (e)=>{
      if(input!==''){
        setInput(input + e);
        console.log(input);
      }
  }
  const addDecimalToInput = (e)=>{
      if(input.indexOf('.')=== -1){
          setInput(input+e)
          console.log(input);
      }
  }
  const solve = () =>{
     setCurNum(input);
  }

  useEffect(() => {
    const math_it_Up = {
        '+': function(x,y){return x + y},
        '-': function(x,y){return x - y},
        '*':function(x,y){return x*y},
        '/':function(x,y){return x/y}
    };
    if(curNum !== ''){
        console.log(curNum);
         if(operator !== ''){
         //let solution = Math.floor(parseFloat(prevNum) + parseFloat(curNum));
         let solution = math_it_Up[operator](parseFloat(prevNum),parseFloat(curNum));
         setInput(solution);
         setOperator('');
         setCurNum('');}
         
    } 
  }, [curNum,operator, prevNum])
    function operation_Func(e) {
        setPrevNum(input);
        setInput('');
        setOperator(e);
    }
    return(
        <>
            <main className="main">
        <div className="card calc-body">
            <div className="card-body">
            
            <span className="card-title logo">re<span className="big-A">A</span>ct</span>
            <div className="screen mx-auto">
                <div className="screen__inner">
                  <input type="text" readOnly className="output" value={input} placeholder="0"/>
                </div>
              </div>
              <div className="power-btns">
                <div className="left">
                  <div className="label"></div>
                </div>
                <div className="right">
                  <div className="label"></div>
                </div>
              </div>
            </div>
            <div className="card-body buttons-grid">
                <div className="row">
                    <Button handleClick={clickButton}></Button>
                   <Button handleClick={clickButton}>7</Button>
                    <Button handleClick={clickButton}>8</Button>
                   <Button handleClick={clickButton}>9</Button>  
                   <Button handleClick={operation_Func}>/</Button>
                </div>
                <div className="row">
                  <Button handleClick={clickButton}></Button>
                    {/* <p className="col-auto">
                        <Button handleClick={clickButton} id="4" onClick={(e)=>{setAction(e.target.id)}}>4</button>
                    </p> */}
                    <Button handleClick={clickButton}>4</Button>
                    <Button handleClick={clickButton}>5</Button>
                    <Button handleClick={clickButton}>6</Button>
                    <Button handleClick={operation_Func}>*</Button>
                </div>
                <div className="row">
                   <Button handleClick={clickButton}>%</Button>
                   <Button handleClick={clickButton}>3</Button>
                   <Button handleClick={clickButton}>2</Button>
                   <Button handleClick={clickButton}>1</Button>
                   <Button handleClick={operation_Func}>-</Button>
                </div>
                <div className="row">
                    <ClearButton handleClear={handleClear}>CE</ClearButton>
                   <Button handleClick={addZeroToInput}>0</Button>
                   <Button handleClick={addDecimalToInput}>.</Button>
                   <EqualsButton handleSolve={solve}>=</EqualsButton>
                   <Button handleClick={operation_Func}>+</Button>
                </div>
            </div>
        </div>
      </main>
        </>
    )
}

export default Calculator

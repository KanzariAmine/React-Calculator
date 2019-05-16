import React from 'react'

 const  Numbers = props => {
   const { handleNumClick, resetInput, handleEqual} = props;
  return (
   
    <div className="container">
        <div className="row">
          <input className="input_num" type="button" value= "7" onClick={handleNumClick}/>
          <input className="input_num" type="button" value= "8" onClick={handleNumClick}/>
          <input className="input_num" type="button" value= "9" onClick={handleNumClick}/>
          <input className="input_operator" type="button" value= "/" onClick={handleNumClick}/>
         </div>

         <div className="row">
          <input className="input_num" type="button" value= "4" onClick={handleNumClick}/>
          <input className="input_num" type="button" value= "5" onClick={handleNumClick}/>
          <input className="input_num" type="button" value= "6" onClick={handleNumClick}/>
          <input className="input_operator" type="button" value= "*" onClick={handleNumClick}/>
         </div>
         
        
         <div className="row">
          <input className="input_num" type="button" value= "1" onClick={handleNumClick}/>
          <input className="input_num" type="button" value= "2" onClick={handleNumClick}/>
          <input className="input_num" type="button" value= "3" onClick={handleNumClick}/>
          <input className="input_operator" type="button" value= "+" onClick={handleNumClick}/>
        </div>

        <div className="row">
          <input className="input_num" type="button" value= "." onClick={handleNumClick}/>
          <input className="input_num" type="button" value= "0" onClick={handleNumClick}/>
          <input className="input_num" type="button" value = "=" onClick={handleEqual}/>
          <input className="input_operator" type="button" value= "-" onClick={handleNumClick}/>
        </div>

        <div className="row">
          <input className="input_AC" type="button" value= "AC" onClick={resetInput}/>
        </div>
        
    </div>
  )
}
export default Numbers;
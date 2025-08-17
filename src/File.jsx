// import React from 'react'
// import "./File.css"
// import { useState } from 'react'

// function File() {

//   const [number,setnumber]=useState("")
  
//   // const show =(e)=>{
//   //    setnumber(prev => prev + e.target.textContent)
//   // }
// const show = (e) => {
//   const value = e.target.textContent;

//   if (value === "=") {
//     try {
//       setnumber(eval(number).toString()); // ⚠️ eval is not safe for production
//     } catch {
//       setnumber("Error");
//     }
//   } else {
//     setnumber(prev => prev + value);
//   }
// };

//   return (

//     <div>
//       <div className='calculator'>
//          <div className='display' >{number}</div> 

//          <div className='buttons'>
//          <div className='row1'>
//           <button onClick={show}>7</button>
//           <button onClick={show}>8</button>
//           <button onClick={show}>9</button>
//           <button onClick={show}>/</button>
//          </div>
//          <div className='row2'>
//           <button onClick={show}>6</button>
//           <button onClick={show}>5</button>
//           <button onClick={show}>4</button>
//           <button onClick={show}>*</button>
//          </div>
//           <div className='row3'>
//             <button onClick={show}>3</button>
//             <button onClick={show}>2</button>
//             <button onClick={show}>1</button>
//             <button onClick={show}>-</button>
//           </div>
//           <div className='row4'>
//             <button onClick={show}>+</button>
//             <button onClick={show}>0</button>
//             <button onClick={show}>=</button>
//             <button onClick={show}>00</button>
//           </div>


//          </div>
//       </div>
























//     </div>
//   )
// }
// export default File

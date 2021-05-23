import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// function AppTwo(){
//   return (
//     <h1>This is the second app</h1>
//   )
// }


// const checklist = ["boots","tent","headlamp"];
// console.log(checklist);

// const [_,t,lamp] = ["boots","tent","headlamp"];
// console.log(_,t);
// console.log(t);
// console.log(lamp);


ReactDOM.render(
  //React.createElement("h1", {style : {color : "red" }}, "Hey Asshole!"),
  
  /*React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Monday"),
    React.createElement("li", null, "Tuesday"),
    React.createElement("li", null, "Wednesday"),
  ),*/
  
  /*<ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
    <li>Thursday</li>
  // </ul>*/

  // <App/> 
  
    // < style={{backgroundColor:"red"}}>
    // <App />
    // <AppTwo />                  // only fits one component here. So if you want to add one more fit it in one div or any other tag
    // </>

  

  // <div style={{backgroundColor:"white"}}>           
  //   <App authorized={false}/> 
  //   <hr></hr>   
  //   {/* <AppTwo /> */}
  // </div>

<App />
 ,                            
  document.getElementById('root')
);


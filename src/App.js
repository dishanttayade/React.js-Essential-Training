//import logo from './logo.svg';
import React from 'react';
import './App.css';
// import restaurant from "./restaurant.jpg"

// function Header(props){
//   console.log(props);
//   return (
//     <header>
//       <h1>{props.name}'s Restaurant</h1>
//     </header>
//   )
// }

// function Main(props){
//   return (
//     <section>
//       <h2> We serve world's {props.addline} food here.</h2>
//       {/* <img style={{height:"300px"}} src="https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg" />
//        */}
//       <img height={300} src={restaurant} alt="a picture "/>

//       <ul style={{textAlign:"left"}}>
//         {/* {props.dishes.map((dish) => (
//           <li>{dish}</li>             //Shows an error in console that objects without keys
//         ))} */}
//         {/* {props.dishes.map((dish, i) => (
//           <li key={i}>{dish}</li>             //Can create the error for listing
//         ))} */}
//         {props.dishes.map((dish) => (
//           <li key={dish.id}>{dish.title}</li>             
//         ))}

//       </ul>
//     </section>
//   )
// }

// function Footer(props){
//   return (
//     <footer>
//       <h3>Copyright {props.year} </h3>
//     </footer>
//   )
// }

// const dishes = [
//   "Macroni and  Cheese",
//   "Salmon",
//   "Tofu and Vegetables",
//   "Minestrone",
//   "Mash Potato",
//   "Veg Sandwich",
//   "Mutton Biryani",
// ];

// const dishObjects = dishes.map((dish, i)=> ({ id: i, title: dish}));


// function App() {
//   return (
//     <div className="App">
//       <Header name="Dishant"/>
//       <Main  addline="amazing" dishes={dishObjects}/>
//       <Footer year={new Date().getFullYear()} />
//     </div>
//   );
// }







// function SecretComponent(){
//   return <h1>Secret Information for authorized users only...</h1>
// }

// function RegularComponent(){
//   return <h1>Everyone can see this information...</h1>
// }

// function App(props){
//   console.log(props);
//   // if(props.authorized){
//   //   return <SecretComponent />  
//   // }
//   // else{
//   //   return <RegularComponent />
//   // }

//   return (
//     <>
//     {props.authorized ? <SecretComponent />: <RegularComponent />}
//     </>
//   );
  
// }


// import {useState, useEffect} from "react";

// function App(){
//   const [emotion ,setEmotion] =  useState("happy");
//   //console.log(emotion);

//   useEffect(() =>{
//     console.log(`It's ${emotion} around here.`)
//   })

//   return (
//     <>
//     <h1>I am {emotion}.</h1>
//     <button onClick={() => setEmotion("frustrated")}>
//       Change emotion
//     </button>
//     <button onClick={() => setEmotion("happy")}>
//       Change again
//     </button>
//     </>
//   );
// }


// import {useState} from "react";
import {useReducer} from "react";

function App(){
  // const [checked, setChecked] = useState(false);
  // function toggle(){
  //   setChecked((checked) => !checked)
  // }

  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  )

  return (
    <>
      <input type="checkbox"
      value={checked}
      onChange={toggle}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}


export default App;








// Dishant Tayade
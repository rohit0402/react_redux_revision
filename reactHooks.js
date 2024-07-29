use_state;
// import {usestate} from 'React';
//in any component
// const comp1=()=>{
//     const [i,setI]=usestate(0) // initializing i from 0

//     const add=()=>{
//         setI(i+1);
//     }
//     const dec=()=>{
//         setI(i+1);
//     }
//     return(
//         <>
//             <h3>{i}</h3>
//             <button onClick={add}>add</button>
//             <button onClick={add}>dec</button>
//             <button onClick={()=>{setI(i+1)}}>add</button> can be done like this jab page reload ho toh problem na ho
//             <button onClick={()=>{setI(i-1)}}>dec</button>
//         </>
//     )
// }

use_effect;
// import {useEffect} from 'react'  jab page reload hota hai toh kaafi kam aata hai
// const comp1=()=>{
//     useEffect(() => {
//         setTimeout(() => {
//             alert('page reload after 2sec');
//         }, 2000);
//     }, []) //agar yeh [] empty hai toh page ek baar reload hoga lekin agar fillup hai toh baar baar reload hoga

//     return (
//         <>
//         </>
//     )
// }

using_usestate_and_useeffect_for_fetching_data;
// const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts();
//   }, []);                       //for refreshing page

//   useEffect(() => {
//     showpdt();
//   }, [products]);              //for when products array get store it call showpdt

//   const getProducts = async () => {
//     try {
//       const response = await fetch("https://dummyjson.com/products");
//       const data = await response.json();
//       setProducts(data.products); // accessing the 'products' property in the response
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const showpdt = () => {
//     products.map((product) => {
//       console.log(product.images[0]);
//     });

using_useContext;
// first create a context folder and inside it createcontext File
// in this import createcontext and create a new context and export that new context

// import { createContext } from "react";
// const ProductContext=new createContext();
// export  default ProductContext ;

// then in app file import  that newcontext and use it like this

// export default function App() {
//     const [products,setProducts]=useState([]);
//     return (
//       <ProductContext.Provider value={{products,setProducts}}>           ----> here you need to pass as object
//       <Router>
//         <Navbar  setProducts={setProducts}/>
//         <Routes>
//           <Route path='/' element={<Home  />}/>
//         </Routes>
//       </Router>
//       </ProductContext.Provider>
//     )
//   }
//   only this much

// now in whichever file you want to use just import usecontext and use it
// import ProductContext from "../Context/UserContext";
// const {products, setProducts} = useContext(ProductContext);

use_reducer;
// import React, { useState, useReducer } from "react";
// function Counter() {
//     in use state
//   const [count, setCount] = useState(0);
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);

// use_reducer_syntax
// const [count,dispatch]=useReducer(reducer,intialValue);
//   const [count, dispatch] = useReducer(reducer, 0);
//   const reducer = (state, action) => {
//     if (action.type == "incerment") {
//       return (state = state + 1);
//     }
//     if (action.type == "decrement") {
//       return (state = state - 1);
//     }
//   };
//   return (
//     <div>
//         {/* in use state */}
//       {/* <button onClick={increment}>Increment</button>
//       <p>Count: {count}</p>
//       <button onClick={decrement}>Decrement</button> */}

//       {/* in reducer */}
//       <button onClick={()=>dispatch({type:"increment"})}>+</button>
//       <p>Count: {count}</p>
//       <button onClick={()=>dispatch({type:"decrement"})}>-</button>
//     </div>
//   );
// }

use_refrence_hook;
//can focus where userefrence is used just after page is reload
// import {useRef} from 'react'

// const inputRef=useRef();
// useEffect(() => {
//   inputRef.current.focus();
// }, [third])

// <div>
//     <button ref={inputRef}>+</button>    when page reload focus is on this button
//     <button>+</button>
// </div>

useMemo_hook;
//helpful for not reloading component again and again when any value is changes
// import {useMemo} from 'react'
// const [number,setNumber]=useState(0);
// function squarenumber(number){
//     return Math.pow(number,2);
// }
// const sqnum = useMemo(() => {
//   return squarenumber(number);
// }, [number]);

use_Callback_hook
// import (useCallback) from 'react';
// const [count,setCount]=useState(0);

// const showMessage=useCallback(
//   () => {
//     setCount(count+1);
//   },
//   [count],
// );

// <div>
//     <button onClick={showMessage} >Click</button>
//     <p> button clicked {count} times</p>
// </div>

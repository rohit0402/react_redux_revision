redux;
// redux can store some functions which can be used at different area help in minimizing props

// for installing run in terminal 'npm install @reduxjs/toolkit' then run 'npm install react-redux'
// create a redux folder inside src folder then inside redux create a file name store.js and a folder name slices  inside all functions like addtocart
// removefromcart , isauth,like that files are created and exported to store



also_in_main.jsx_file_import_and_add_something;
// import { Provider } from "react-redux";
// import Store from "store.js";
// ReactDOM.createRoot(document.getElementById("root")).render(
//   //copynfrom here and paste in main.jsx
//   <React.StrictMode>
//     <Provider Store={Store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );



Store.js_file;
// import {configureStore} from "@reduxjs/toolkit"
// const store=configureStore({

// });
// export default store;



now_inside_slices_folder_create_jsx_file_according_to_functions;
authSlice.jsx_file;
// import {createSlice} from "@reduxjs/toolkit";
// const authSlice=createSlice({
//     name:"auth",   // just give slice name as how you are calling it
//     initialState:{     //initialState require for initializing just like in for user:useState('') or for isAuth:useState(false)
//         user:null,      // or also for an array declare it like ---> products:[],
//         isAuth:false,
//     },
//     reducers:{
//         // reducer here use to create function like we create for use state
//         loginUser:(state,action)=>{
//             state.isAuth=true;     //state is calling from initialState and put that
//         },
//         logoutUser:(state,action)=>{
//             state.isAuth=false;
//         },
//         setUser:(state,action)=>{
//             state.user=action.payload;   //action.payload is use for inserting data coming as action
//         },
//     },
// });
// export const{loginUser,logoutUser,setUser}=authSlice.actions;   //exporting all function as authSliceactions
// export default authSlice.reducer;   //exporting authSlice reducer which we get from calling as use selector

// similarly we can use search as slice



searchSlice.jsx_file;
// import {createSlice} from "@reduxjs/toolkit";
// const searchSlice=createSlice({
//     name:"search",
//     initialState:{
//         search:"",
//     },
//     reducers:{
//         setSearch:(state,action)=>{
//             state.search=action.payload;
//         },
//     },
// });
// export const{setSearch} = searchSlice.actions;
// export default searchSlice.reducer;



cartSlice.jsx_file;
// import { createSlice } from "@reduxjs/toolkit";
// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cartSlice: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.cart.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingItem) {
//         state.cart = state.cart.map((item) => {
//           item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item;
//         });
//       } else {
//         state.cart = state.cart.push(action.payload);
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.cart = state.cart.filter((item) => {
//         item.id !== action.payload.id;
//       });
//     },
//     incrementQty: (state, action) => {
//       state.cart = state.cart.map((item) =>
//         item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
//       );
//     },
//     decrementQty: (state, action) => {
//       state.cart = state.cart.map((item) =>
//         item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
//       );
//     },
//     setCart: (state, action) => {
//       state.cart = action.payload;
//     },
//   },
// });
// export const{addToCart,removeFromCart,incrementQty,decrementQty,setCart}=cartSlice.actions;
// export default cartSlice.reducer;



now_about_calling_and_using_these_functions;
first_need_to_export_from_store.js_file;
// import allslices like searchSlice,cartSlice,authSlicefrom slices
// import {configureStore} from "@reduxjs/toolkit";

// const store=configureStore({
//     reducer:{
//         cart:cartSlice,
//         search:searchSlice,
//         auth:authSlice,
//     },
// });
// export default Store;


for_using;
// import useDispatch and useSelector from "react-redux";
// and import particular reducer function you want to use like addtocart from redux/slices/cartSlice

// now inside component
// const dispatch =useDispatch();
// const cartItems = useSelector((state) => state.cart.cart);
//   const totalQty = cartItems.reduce((total, item) => total + item.quantity, 0);
//   const totalPrice = cartItems.reduce(
//     (total, item) => (total = total + item.quantity * item.price),
//     0
//   );

//   for_increment_decrement
//   const incrementQuantity=async (id)=>{
//     const res=await axios.put(`https://delicious-backend-1.onrender.com/api/incrementQuantity/${id}`);
//     const data=await  res.data;
//     getCart(user).then((data)=> dispatch(setCart(data.cartItems)));
//   }
//   const decrementQuantity=async (id)=>{
//     const res=await axios.put(`https://delicious-backend-1.onrender.com/api/decrementQuantity/${id}`);
//     const data=await  res.data;
//     getCart(user).then((data)=> dispatch(setCart(data.cartItems)));
//   }

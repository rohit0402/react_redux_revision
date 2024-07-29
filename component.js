
navbar 
// simple take a div inside it keep h3 and inputtypesearch and ul(inside having li)

// const Navbar = ({setProducts}) => {  can use search input like this if products is defined in 
// main function else it is difficult to declare usestate in every components
//   const [searchval,setSearchval]=useState("");

//   const handleChange=(e)=>{
//     setSearchval(e.target.value);
//   }

//   const searchpdt = async ()=>{
//     const respone=await fetch(`https://dummyjson.com/products/search?q=${searchval}`);
//     const data=await respone.json();
//     setProducts(data.products);
//   }

{
  /* <div className=' flex justify-between items-center gap-5 px-1 py-3 shadow-md rounded-lg ' >
      <h4 className='font-bold text-lg ml-4 px-2'>Project1</h4>
      <div className=' flex gap-1 '>
        <input type="search" name='' id='' className=' bg-slate-200 outline-none rounded-md w-[50vw] h-8 ' />
      <button className=' bg-slate-500 px-2 py-1 rounded-md cursor-pointer outline-none'>Search</button>
      </div>
      <ul className=' flex space-x-4 font-bold text-lg mr-4 px-2'>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </div> */
}


homecomponent
// import React, { useContext, useEffect } from "react";
// import Card from "./Card";
// import ProductContext from "../Context/UserContext";

// const Home = () => {
//   const { products, setProducts } = useContext(ProductContext);

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = async () => {
//     try {
//       const response = await fetch("https://dummyjson.com/products");
//       const data = await response.json();
//       setProducts(data.products);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:p-4">
//       {products.map((product) => (
//         <Card
//           key={product.id}
//           title={product.title}
//           description={product.description}
//           price={product.price}
//           image={product.images[0]}
//           product={product} // Pass the entire product object to Card
//         />
//       ))}
//     </div>
//   );
// };

// export default Home;

card 
// import React, { useContext } from "react";
// import ProductContext from "../Context/UserContext";

// const Card = ({ price, title, description, image, product }) => {                 --> here whole product also getting so you can if want
//                                                                             use product.title like that but to add in cart product is needed
//   const { cart, setCart } = useContext(ProductContext);

//   const add_to_cart = (product) => {
//     setCart([...cart, product]);                               ---> important for copying and then adding
//     console.log(cart);
//   };

//   const truncateDescription = (text, maxLength) => {
//     if (text.length > maxLength) {
//       return text.substring(0, maxLength) + '...';
//     }
//     return text;
//   };

//   return (
//     <div className=" mx-28 lg:mx-auto md:mx-auto w-[80vw]  md:w-[40vw] lg:w-[20vw] mb-4 lg:px-4 py-3 bg-slate-50 rounded-md">
//       <div className="overflow-hidden h-48">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full bg-slate-200 hover:scale-110 cursor-pointer transition-all ease-in-out rounded-md hover:rounded-b-lg"
//         />
//       </div>
//       <div>
//         <span className="text-lg font-bold">{title}</span>
//         <p>{truncateDescription(description, 100)}</p>
//         <div className="flex justify-between items-center">
//           <span>${price}</span>
//           <button 
//             className="bg-slate-500 px-3 py-1 rounded-md font-bold"
//             onClick={() => add_to_cart(product)}
//           >
//             Buy
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

Cart
// same as card and home but little difference on making  remove from cart and in navbar calculating length
// const { cart } = useContext(ProductContext);
// return (
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:p-4">
//     {cart.length === 0 ? (
//       <div className=" font-bold text-2xl flex justify-center w-[80vw]">Cart is Empty</div>
//     ) : (
//       cart.map((product) => (
//         <CartCard
//           key={product.id}
//           title={product.title}
//           description={product.description}
//           price={product.price}
//           image={product.images[0]}
//           product={product}
//         />
//       ))
//     )}
//   </div>
// );
in_cartcard
// const Remove = (product) => {
//   const newCart = cart.filter((element) => product.id !== element.id);
//   setCart(newCart);
// };
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/cartSlice";


{/*post state variable rcv where all shopping product data store now isme se har ek chiz ko nikla uske liye div create kar usmme store kr k ui pe render kr denge */} 
function Product({post}) {

  //get cart data from cartSlice.js se by use of useSelector
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();                     //its use to call add,remove reducer function in CartSlice.js loc11,12

  const addToCart = () => {
    dispatch(add(post));                           //send post value in  reducers add() function in CartSlice.js and called too
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));                       //send post id in remove() reducer function me and called too
    toast.error("Item removed from Cart");
  }

  return (
    <div className="flex flex-col items-center justify-between
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl 
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
     
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
        {post.description.split(" ").slice(0,10).join(" ") + "..."}</p>  

      </div>
     
      <div className="h-[108px]"> 
      <img src={post.image} className="h-full w-full" />
      </div>
      <div>
      <div className="flex justify-between items-center w-full mt-5 gap-12">
         <div> <p className="text-green-600 font-semibold">${post.price}</p> </div>
        
      {
         cart.some((p) => p.id == post.id) ?
          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
          text-[12px] p-1 px-3 uppercase
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={removeFromCart}>  Remove Item </button>) :         
         
          (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
          text-[12px] p-1 px-3 uppercase
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={addToCart}> Add to Cart</button>)
        }
     </div>
      </div>
      

     </div>
  );
};

export default Product;
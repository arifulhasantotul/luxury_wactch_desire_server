import React from "react";
import "./Cart.css";

const Cart = (props) => {
   console.log(props);
   const { list } = props;

   let actorName;
   let actorImg;
   let actorCost;
   for (const actor of list) {
      actorName = actor.name;
      actorImg = actor.pic;
      actorCost = actor.income;
   }
   // console.log(actorName);

   const reducer = (previous, current) => previous + current.income;
   const total = list.reduce(reducer, 0);
   return (
      <div>
         <h4>List Summary</h4>
         <p>Total actors: {list.length}</p>
         <p>Spend cost: {total}</p>
         <div style={{ display: "flex" }}>
            <img
               src={actorImg}
               style={{ width: "5rem", height: "5rem" }}
               alt=""
            />
            <div>
               <p>{actorName}</p>
               <p>{actorCost}</p>
            </div>
         </div>
      </div>
   );
};

export default Cart;

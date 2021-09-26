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
      <div className="cart">
         <h3>List Summary</h3>
         <hr />
         <h4>Total actors: {list.length}</h4>
         <h4>Spend cost: € {total}</h4>
         <div className="sm_card">
            <img className="img-fluid p-xl-4" src={actorImg} alt="" />
            <div className="sm_card_details">
               <h5>{actorName}</h5>
               <h5>{actorCost}</h5>
            </div>
         </div>
      </div>
   );
};

export default Cart;

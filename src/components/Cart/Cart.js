import React from "react";
import SmallCard from "../SmallCard/SmallCard";
import "./Cart.css";

const Cart = (props) => {
   const { lists } = props;

   const reducer = (previous, current) => previous + current.income;
   const total = lists.reduce(reducer, 0);
   return (
      <div className="cart">
         <h3>List Summary</h3>
         <hr />
         <h4>Total actors: {lists.length}</h4>
         <h4>Spend cost: € {total}</h4>
         <div className="sm_card_container">
            {lists.map((list) => (
               <SmallCard key={list.id} list={list}></SmallCard>
            ))}
         </div>
      </div>
   );
};

export default Cart;

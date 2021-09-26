import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Datacard from "../Datacard/Datacard";
import "./Main.css";

const Main = () => {
   // declare state to setCard
   const [cards, setCards] = useState([]);
   // declare state for event handler
   const [list, setList] = useState([]);

   // useEffect to fetch data
   useEffect(() => {
      fetch("./actorsdata.JSON")
         .then((res) => res.json())
         .then((data) => setCards(data));
   }, []);

   // add event handler to parent component
   const handleAddToList = (product) => {
      const newCart = [...list, product];
      setList(newCart);
   };

   return (
      <div className="section container-fluid">
         {/* card container  */}
         <div className="card_container">
            {cards.map((card) => (
               <Datacard
                  key={card.id}
                  card={card}
                  addList={handleAddToList}
               ></Datacard>
            ))}
         </div>

         {/* cart container  */}
         <div className="cart_container">
            <Cart lists={list}></Cart>
         </div>
      </div>
   );
};

export default Main;

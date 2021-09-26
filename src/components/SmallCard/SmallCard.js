import React from "react";
import "./SmallCard.css";

const SmallCard = (props) => {
   const { name, pic, income } = props.list;
   return (
      <div className="small_card">
         <img className="img-fluid p-xl-4" src={pic} alt="" />
         <div className="sm_card_details">
            <h5>{name}</h5>
            <h5>{income}</h5>
         </div>
      </div>
   );
};

export default SmallCard;

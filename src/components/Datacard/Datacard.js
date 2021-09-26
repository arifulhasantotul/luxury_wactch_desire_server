import React from "react";
import "./Datacard.css";

const Datacard = (props) => {
   console.log(props.card);
   const { name, pic, age, income, role } = props.card;

   return (
      <div className="card text-center">
         <img
            src={pic}
            style={{
               width: "120px",
               height: "120px",
               margin: "0 auto",
               borderRadius: "50%",
               marginBottom: "10px",
            }}
            className="img-fluid"
            alt=""
         />
         <p>Actor: {name}</p>
         <p>Character: {role}</p>
         <p>Age: {age}</p>
         <p>
            Salary: €{income} <small>per episode</small>
         </p>
      </div>
   );
};

export default Datacard;

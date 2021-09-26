import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Datacard.css";

const Datacard = (props) => {
   // console.log(props.card);
   const bagIcon = <FontAwesomeIcon icon={faShoppingBag} />;

   const facebookIcon = <i className="fab fa-facebook-square"></i>;
   const twitterICon = <i className="fab fa-twitter-square"></i>;

   // destructuring array of object
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
         <p>
            Actor: <b>{name}</b>
         </p>
         <p>
            Character: <b>{role}</b>
         </p>
         <p>
            Age: <b>{age}</b>
         </p>
         <p>
            Salary: €{income}{" "}
            <small>
               {" "}
               <b>per episode</b>
            </small>
         </p>
         <p>
            {facebookIcon} {twitterICon}
         </p>
         <button
            onClick={() => props.addList(props.card)}
            className="btn btn-success"
         >
            {" "}
            {bagIcon} Add to list
         </button>
      </div>
   );
};

export default Datacard;

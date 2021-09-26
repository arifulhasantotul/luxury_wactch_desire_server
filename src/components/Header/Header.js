import React from "react";
import "./Header.css";

const Header = () => {
   return (
      <div className="header container-fluid text-center py-4">
         <div className="d-flex justify-content-between align-items-center">
            <h3>
               <span> |Y| </span> Diriliş: Ertuğrul
            </h3>
            <h3>
               Total Budget : <span> €2000000</span>
            </h3>
         </div>
         <p className="pt-3">
            <small>
               Some real warriors of Islam who fights for Allah and also to
               remove all kinds of suppression, oppression of Mughal Empire and
               Byzantine Empire
            </small>
         </p>
      </div>
   );
};

export default Header;

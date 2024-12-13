// import React from 'react'
import "./Bgcomp.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

function BgComp() {
  return (
    <div>
      <div className="bg-container">
        <div className="bg">
          <div className="searchbox">
          
              <input type="text" placeholder="Enter Ur Desitination" />
              <button className="bg-btn">
                <FaMagnifyingGlass />
              </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default BgComp;

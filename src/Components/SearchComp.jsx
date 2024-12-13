// import React from 'react'
import "./Searchcomp.css";
import img1 from "../assets/hotelroom_5s.jpg";
import img2 from "../assets/hotelroom_5s2.jpg";
import img3 from "../assets/hotelroom_4s.jpg";
import img4 from "../assets/hotelroom_4s2.jpg";
import img5 from "../assets/hotelroom_3s2.jpg";
import img6 from "../assets/hotelroom_3s.jpg";
function SearchComp() {
  return (
    <div className="SearchResultWrapper">
      <div className="Search_Box">
        <input type="text" placeholder="SEARCH" className="Serchinput" />
        <button className="Submit_querybtn">Submit</button>
      </div>

      <div className="searchedImg_Container">
        <div className="searchedImg1_text_container">
          <div className="searchedImg1">
            <img src={img1} alt="img-1" />
          </div>
          <div className="sercedImg_text my-2">
            <h1 className="img-text text-success">
              <span className="text-danger">Price:</span>$200
            </h1>
          </div>
        </div>

        <div className="searchedImg1_text_container">
          <div className="searchedImg1">
            <img src={img2} alt="img-1" />
          </div>
          <div className="sercedImg_text my-2">
            <h1 className="img-text text-success">
              <span className="text-danger">Price:</span>$200
            </h1>
          </div>
        </div>

        <div className="searchedImg1_text_container">
          <div className="searchedImg1">
            <img src={img3} alt="img-1" />
          </div>
          <div className="sercedImg_text my-2">
            <h1 className="img-text text-success">
              <span className="text-danger">Price:</span>$190
            </h1>
          </div>
        </div>

        <div className="searchedImg1_text_container">
          <div className="searchedImg1">
            <img src={img4} alt="img-1" />
          </div>
          <div className="sercedImg_text my-2">
            <h1 className="img-text text-success">
              <span className="text-danger">Price:</span>$180
            </h1>
          </div>
        </div>

        <div className="searchedImg1_text_container">
          <div className="searchedImg1">
            <img src={img5} alt="img-1" />
          </div>
          <div className="sercedImg_text my-2">
            <h1 className="img-text text-success">
              <span className="text-danger">Price:</span>$150
            </h1>
          </div>
        </div>

        <div className="searchedImg1_text_container">
          <div className="searchedImg1">
            <img src={img6} alt="img-1" />
          </div>
          <div className="sercedImg_text my-2">
            <h1 className="img-text text-success">
              <span className="text-danger">Price:</span>$150
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComp;

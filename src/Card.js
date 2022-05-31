import React from "react";
import './App.css'

const Card = () => {
    return (
      <div className="tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="beautiful nature view" src="https://source.unsplash.com/collection/928423/240x240" />
        <div>
          <h2>beautiful nature</h2>
          <p>beautiful nature@gmail.com</p>
        </div>
      </div>
    )
}

export default Card
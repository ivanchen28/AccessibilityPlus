import "./ColourblindnessDemo.css"
import React, { useState }  from 'react'
import { CirclePicker } from 'react-color'

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function ColourblindnessDemo(properties) {
  const colourSet = {
    black: "#4b4a4e",
    blue: "#abafd1",
    green: "#9c9373",
    grey: "#c6c4c7",
    maroon: "#3a3a42",
    red: "#5f5b4e"
  }
  const imagePaths = {
    black: "/images/demos/colourblindness/shirts/black.jpg",
    blue: "/images/demos/colourblindness/shirts/blue.jpg",
    green: "/images/demos/colourblindness/shirts/green.jpg",
    grey: "/images/demos/colourblindness/shirts/grey.jpg",
    maroon: "/images/demos/colourblindness/shirts/maroon.jpg",
    red: "/images/demos/colourblindness/shirts/red.jpg"
  }
  const colourNames = {
    black: "Black",
    blue: "Blue",
    green: "Green",
    grey: "Grey",
    maroon: "Maroon",
    red: "Red"
  }
  const handleChange = (colour, event) => {
    const newColour = getKeyByValue(colourSet, colour.hex);
    pickColour(newColour);
  }
  const [pickedColour, pickColour] = useState([]);
  if (properties.label === "true") {
    return (
      <>
        <div className='picker-container'>
          <div className="figure-wrapper">
            <figure>
              <img
                src={imagePaths[pickedColour] ?? imagePaths.black}
                alt="A shirt."
              />
            </figure>
          </div>
          <div className="picker-wrapper">
            <h3 className="product-title">Hanes Men's Short Sleeve Comfort Soft T-Shirt <br/><br/> $37.44</h3>
            <div
              className="picker"
              style={{
                'display': 'flex',
                'justify-content': 'center',
                'align-items': 'center',
                'flex-flow': 'column',
                'margin-left': '20px',
                'margin-top': '-40px',
              }}>
              <h3 style={{'margin-left': '-15px'}}>Colour: {colourNames[pickedColour] ?? colourNames.black}</h3><br/>
              <CirclePicker
                className="circle-picker"
                onChange={handleChange}
                width = {"100px"}
                color={colourSet[pickedColour] ?? colourSet.black}
                colors={colourSet}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
  else return (
    <>
      <div className='picker-container'>
        <div className="figure-wrapper">
          <figure>
            <img
              src={imagePaths[pickedColour] ?? imagePaths.black}
              alt="A shirt."
            />
          </figure>
        </div>
        <div className="picker-wrapper">
          <h3 className="product-title">Hanes Men's Short Sleeve Comfort Soft T-Shirt <br/><br/> $37.44</h3>
          <div
            className="picker"
            style={{
              'display': 'flex',
              'justify-content': 'center',
              'margin-left': '20px',
              'margin-top': '-40px',
            }}>
            <CirclePicker
              className="circle-picker"
              onChange={handleChange}
              width = {"100px"}
              color={colourSet[pickedColour] ?? colourSet.black}
              colors={colourSet}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ColourblindnessDemo
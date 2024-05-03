import React, { useState } from 'react';
import './SwapContainer.css';

const SwapBoxPage = () => {
  const [box1Text, setBox1Text] = useState('Box 1');
  const [box2Text, setBox2Text] = useState('Box 2');

  const swapBoxes = () => {
    const temp = box1Text;
    setBox1Text(box2Text);
    setBox2Text(temp);
  };

  const moveBoxes = () => {
    const temp = box1Text;
    setBox1Text(box2Text);
    setBox2Text(temp);
  };

  return (
    <div
      className="farm-div"
      style={{ boxShadow: "0px 10px 80px 10px rgb(0, 0, 0, 0.06)" }}
    >
      <div className="page-container">
        <div className="box" onClick={swapBoxes}>
          {box1Text}
        </div>
        <button className="swap-button" onClick={moveBoxes}>
          Move Boxes
        </button>
        <div className="box" onClick={swapBoxes}>
          {box2Text}
        </div>
      </div>
    </div>
  );
};

export default SwapBoxPage;

import React, { useState } from "react";

export default function UseStateHook() {
  const [myStyleLeft, setMyStyleLeft] = useState({
    color: " ",
    backgroundColor: "red",
  });
  const [myStyleRight, setMyStyleRight] = useState({
    color: " ",
    backgroundColor: "green",
  });

  const [count, setCount] = useState(() => {
    console.log("Run Function");
    return 0;
  });

  function rightClick() {
    setCount((prevCount) => prevCount + 1);
    if(myStyleRight.color === 'white'){
        setMyStyleRight({
            color:'grey',
            backgroundColor: 'white'
        })
    }
    else{
        setMyStyleRight({
            color:'white',
            backgroundColor: 'grey' 
        })
    }
  }

  function leftClick() {
    setCount((prevCount) => prevCount - 1);
    if(myStyleLeft.color === 'white'){
        setMyStyleLeft({
            color:'grey',
            backgroundColor: 'white'
        })
    }
    else{
        setMyStyleLeft({
            color:'white',
            backgroundColor: 'grey' 
        })
    }
  }

  function multiplyClick() {
    setCount((prevCount) => prevCount * prevCount);
  }
  function clearScr() {
    setCount((prevCount) => prevCount * 0);
  }

  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">The Count is: {count}</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
        </div>

        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={leftClick}
            style={myStyleLeft}
          >
            Subtract
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={multiplyClick}
          >
            Multiply
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={rightClick}
            style={myStyleRight}

          >
            Add
          </button>
        </div>
        <div className="container my-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={clearScr}
          >
            Clear Count
          </button>
        </div>
      </div>
    </>
  );
}

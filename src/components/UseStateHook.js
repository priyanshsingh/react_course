import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(() => {
    console.log("Run Function");
    return 0;
  });

  function rightClick() {
    setCount((prevCount) => prevCount + 1);
  }

  function leftClick() {
    setCount((prevCount) => prevCount - 1);
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
        <div class="jumbotron">
          <h1 class="display-4">The Count is: {count}</h1>
          <p class="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr class="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
         
        </div>

        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary" onClick={leftClick}>
            Subtract
          </button>
          <button type="button" class="btn btn-primary" onClick={multiplyClick}>
            Multiply 
          </button>

          <button type="button" class="btn btn-primary" onClick={rightClick}>
            Add
          </button>
          </div>
          <div className="container my-3">
            <button type="button" class="btn btn-secondary btn-lg btn-block" onClick={clearScr}>Clear Count</button>
        </div>
      </div>
    </>
  );
}

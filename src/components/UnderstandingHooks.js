import React, { useState } from "react";

export default function UnderstandingHooks() {
  const [count, setcount] = useState(() => {
    console.log("Run Function");
    return 5;
  });

  function decrementCount() {
    setcount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setcount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <div className="container">
        <button type="button" class="btn btn-success" onClick={decrementCount}>
          -
        </button>
        <span> {count} </span>
        <button type="button" class="btn btn-success" onClick={incrementCount}>
          +
        </button>
      <br />
        <div class="alert alert-primary my-3" role="alert">
          A simple primary alert—check it out!
        </div>
        <button type="button" class="btn btn-primary position-relative">
          Inbox
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            69+
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    </>
  );
}

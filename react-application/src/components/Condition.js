import React, { useState } from "react";
import Subscriptions from "./Subscriptions";
import Buttons from "./Buttons";

function Condition() {
  const [state, setState] = useState(true);

  return (
    <div>
      <Buttons text="Show Table" onClick={() => setState(prevState => !prevState)}>
        Show Table
      </Buttons>
      {!state ? <Subscriptions /> : null}
    </div>
  );
}

export default Condition;

import React, { useState } from "react";
import Subscriptions from "./Subscriptions";
import Buttons from "./Buttons";

function Condition() {
  const [state, setState] = useState(false);

  return (
    <div>
      <Buttons text={state} onClick={() => setState(prevState => !prevState)}/>
      {state ? <Subscriptions /> : null}
    </div>
  );
}

export default Condition;

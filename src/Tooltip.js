import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  const [active, setActive] = useState(false);

  const showTooltip = () => {
    setActive(true);
  };

  const hideTooltip = () => {
    setActive(false);
  };

//   console.log(props.position.top);

  return (
    <div>
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        class="Tooltip-Wrapper"
      >
        Hover over me
        {active ? (
          <span className={`Tooltip-Tip ${props.position.left}`}>
            Tooltip text
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Tooltip;

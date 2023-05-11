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



  return (
    <div>
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        class="Tooltip-Wrapper"
      >
        Hover over me
        {active ? (
          <span className={`Tooltip-Tip ${props.position.top}`}>
           tootip is showing!!!!
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Tooltip;

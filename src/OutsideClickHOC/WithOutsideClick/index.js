import React, { useState, useCallback } from "react";
import cn from "classnames";

import "./style.scss";

import Portal from "../../shared/Portal";

const WithOutsideClick = (Component) => {
  const ComposedComponent = (propsToPass) => {
    const [waitingOnClickOutside, setWaitingOnClickOutside] = useState(false);

    const toggleWaitingOnClickHandler = useCallback(() => {
      setWaitingOnClickOutside(prevState => !prevState);
    }, []);

    return (
      <div
        className={cn("outsideClick__container", {
          "outsideClick__container--active": waitingOnClickOutside,
        })}
      >
        <Component
          {...propsToPass}
          toggleWaitingOnClick={toggleWaitingOnClickHandler}
          waitingOnClickOutside={waitingOnClickOutside}
        />
        {waitingOnClickOutside && (
          <Portal>
            <div
              data-test-id="outsideClick__overlay"
              className="outsideClick__overlay"
              onClick={toggleWaitingOnClickHandler}
            />
          </Portal>
        )}
      </div>
    );
  }
  return ComposedComponent;
}

export default WithOutsideClick;

import React, { useState, useCallback } from "react";
import cn from "classnames";

import "./style.scss";

import Portal from "../../shared/Portal";

const WithOutsideClick = (Component, propsToPass) => {
  const ComposedComponent = () => {
    const [waitingOnClickOutside, setWaitingOnClickOutside] = useState(false);

    const onStartListeningClickOutside = useCallback(() => {
      setWaitingOnClickOutside(true)
    }, []);

    const onClickOutside = useCallback(() => {
      setWaitingOnClickOutside(false)
    }, []);

    return (
      <div
        className={cn("outsideClick__container", {
          "outsideClick__container--active": waitingOnClickOutside,
        })}
      >
        <Component
          {...propsToPass}
          onStartListeningClickOutside={onStartListeningClickOutside}
          waitingOnClickOutside={waitingOnClickOutside}
        />
        {waitingOnClickOutside && (
          <Portal>
            <div
              data-test-id="outsideClick__overlay"
              className="outsideClick__overlay"
              onClick={onClickOutside}
            />
          </Portal>
        )}
      </div>
    );
  }
  return ComposedComponent;
}

export default WithOutsideClick;

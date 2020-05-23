import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

const useSomeActions = (actionsAsArray) => {
  const dispatch = useDispatch();
  return useMemo(
    () => actionsAsArray.map((action) => bindActionCreators(action, dispatch)),
    [dispatch]
  );
};

export default useSomeActions;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { twoCol, threeCol } from "../store/globalSlice";

export const useDynamicGridSize = (size) => {
  const dispatch = useDispatch();
  useEffect(() => {
    switch (size) {
      case 3: {
        dispatch(threeCol());
        break;
      }
      case 2: {
        dispatch(twoCol());
        break;
      }
      default:
        dispatch(threeCol());
        console.log("default grid size set");
    }
  }, [dispatch]);
};

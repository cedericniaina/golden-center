import { useWindowDimensions } from "react-native";

const MOBILE = {
  width: useWindowDimensions().width,
  height: useWindowDimensions().height,
};

export default MOBILE;

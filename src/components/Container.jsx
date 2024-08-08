import { View } from "@react-pdf/renderer";
import PropTypes from "prop-types";

export default function Container({ style = {}, children }) {
  return (
    <View
      style={{
        paddingHorizontal: "24px",
        ...style,
      }}
    >
      {children}
    </View>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

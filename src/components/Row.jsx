import { StyleSheet, View } from "@react-pdf/renderer";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  main: (style) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    ...style,
  }),
});

export default function Row({ style = {}, children }) {
  return <View style={styles.main(style)}>{children}</View>;
}

Row.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

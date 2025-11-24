import { StyleSheet, Text } from "@react-pdf/renderer";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  main: (style) => ({
    fontSize: "12px",
    fontWeight: "bold",
    ...style,
  }),
});

export default function Title({ style = {}, children }) {
  return <Text style={styles.main(style)}>{children}</Text>;
}

Title.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

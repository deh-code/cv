import { View, Text, StyleSheet } from "@react-pdf/renderer";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  main: (style) => ({
    padding: "4px 8px",
    backgroundColor: "#417E38",
    color: "white",
    borderRadius: "4px",
    fontWeight: "medium",
    ...style,
  }),
  content: {
    fontSize: "10px",
  },
});

export default function Chip({ style = {}, children }) {
  return (
    <View style={styles.main(style)}>
      <Text style={styles.content}>{children}</Text>
    </View>
  );
}

Chip.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

import { StyleSheet, View } from "@react-pdf/renderer";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  main: (style) => ({
    paddingHorizontal: "24px",
    ...style,
  }),
});

export default function Container({ style = {}, children }) {
  return <View style={styles.main(style)}>{children}</View>;
}

Container.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

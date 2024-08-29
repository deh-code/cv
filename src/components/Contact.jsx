import { StyleSheet, Text } from "@react-pdf/renderer";
import Icon from "../components/Icon";
import Row from "../components/Row";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  icon: {
    marginRight: "3px",
  },
});

export default function Contact({ icon, children }) {
  return (
    <Row>
      <Icon fill="#666" width="10px" style={styles.icon} faIcon={icon}></Icon>
      <Text>{children}</Text>
    </Row>
  );
}

Contact.propTypes = {
  icon: PropTypes.object,
  children: PropTypes.node,
};

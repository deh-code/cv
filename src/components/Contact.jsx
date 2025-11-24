import { StyleSheet, Text } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import Icon from "../components/Icon";
import Row from "../components/Row";

const styles = StyleSheet.create({
  icon: {
    marginRight: "3px",
  },
});

export default function Contact({ icon, children }) {
  return (
    <Row>
      <Icon fill="#666" width="8px" style={styles.icon} faIcon={icon}></Icon>
      <Text>{children}</Text>
    </Row>
  );
}

Contact.propTypes = {
  icon: PropTypes.object,
  children: PropTypes.node,
};

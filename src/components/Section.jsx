import { StyleSheet, View } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import Title from "./Title";
import Row from "./Row";
import Icon from "./Icon";

const styles = StyleSheet.create({
  main: (style) => ({
    marginBottom: "32px",
    ...style,
  }),
  headerContainer: {
    marginBottom: "12px",
    borderBottom: "1px solid #eee",
    paddingBottom: "8px",
  },
  header: {
    alignItems: "baseline",
  },
  headerIcon: {
    marginRight: "8px",
  },
  headerTitle: {
    fontSize: "16px",
    transform: "translate(0, 4px)",
  },
});

export default function Section({
  style = {},
  title,
  icon,
  iconWidth = "20px",
  children,
}) {
  return (
    <View style={styles.main(style)}>
      {!title ? (
        <></>
      ) : (
        <View style={styles.headerContainer}>
          <Row style={styles.header}>
            <Icon
              faIcon={icon}
              width={iconWidth}
              style={styles.headerIcon}
            ></Icon>
            <Title style={styles.headerTitle}>{title}</Title>
          </Row>
        </View>
      )}
      {children}
    </View>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.object,
  iconWidth: PropTypes.string,
};

import { Image, Link, StyleSheet, Text } from "@react-pdf/renderer";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "8px",
    fontWeight: "medium",
    color: "black",
    textDecoration: "none",
  },
  icon: { width: "14px", marginRight: "2px" },
});

export default function SocialLink({ href, icon, children }) {
  return (
    <Link href={href} style={styles.main}>
      <Image style={styles.icon} src={icon} />
      <Text>{children}</Text>
    </Link>
  );
}

SocialLink.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
};

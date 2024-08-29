import { StyleSheet, Text, View } from "@react-pdf/renderer";
import {
  faGraduationCap,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../components/Icon";
import Row from "../components/Row";
import Title from "../components/Title";
import useLocalization from "../hooks/localization";
import sections from "../data/sections";
import educations from "../data/educations";

const styles = StyleSheet.create({
  headerIcon: {
    marginRight: "4px",
  },
  headerTitle: {
    fontSize: "14px",
    marginBottom: "8px",
  },
  educationHeader: {
    fontSize: "9px",
    marginBottom: "4px",
  },
  educationTitle: {
    fontWeight: "bold",
  },
  educationTitleSeparator: { marginHorizontal: "2px" },
  educationSubject: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
  educationIcon: {
    marginRight: "2px",
  },
  educationLocation: {
    fontWeight: "semibold",
    fontSize: "9px",
    color: "#666",
    fontStyle: "italic",
  },
});

export default function Education() {
  const l = useLocalization();

  return (
    <View>
      <Row>
        <Icon faIcon={faGraduationCap} style={styles.headerIcon}></Icon>
        <Title style={styles.headerTitle}>{l(sections.education)}</Title>
        <View>
          {educations.map((education, index) => (
            <View key={index}>
              <Row style={styles.educationHeader}>
                <Text style={styles.educationTitle}>{l(education.title)}</Text>
                <Text style={styles.educationTitleSeparator}>-</Text>
                <Text style={styles.educationSubject}>
                  {l(education.subject)}
                </Text>
              </Row>
              <Row>
                <Icon
                  faIcon={faLocationDot}
                  width="8px"
                  fill="#666"
                  style={styles.educationIcon}
                ></Icon>
                <Text style={styles.educationLocation}>
                  {l(education.location)}
                </Text>
              </Row>
            </View>
          ))}
        </View>
      </Row>
    </View>
  );
}

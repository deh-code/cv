import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Row from "../components/Row";
import Icon from "../components/Icon";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import Title from "../components/Title";
import useLocalization from "../hooks/localization";
import sections from "../data/sections";
import languages from "../data/languages";

const styles = StyleSheet.create({
  main: {
    fontSize: "9px",
  },
  headerIcon: {
    marginRight: "4px",
  },
  headerTitle: {
    fontSize: "14px",
    marginBottom: "12px",
  },
  languageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  languageColumn: {
    marginBottom: "2px",
    marginRight: "8px",
    fontWeight: "bold",
  },
  levelColumn: {
    marginBottom: "2px",
    fontWeight: "semibold",
  },
  level: { fontStyle: "italic" },
});

export default function Languages() {
  const l = useLocalization();

  return (
    <View style={styles.main}>
      <Row>
        <Icon faIcon={faGlobeAmericas} style={styles.headerIcon}></Icon>
        <Title style={styles.headerTitle}>{l(sections.languages)}</Title>
      </Row>
      <Row>
        <View style={styles.languageContainer}>
          {languages.map((language, index) => (
            <View key={index} style={styles.languageColumn}>
              <Text>{l(language.name)}: </Text>
            </View>
          ))}
        </View>
        <View>
          {languages.map((language, index) => (
            <View key={index} style={styles.levelColumn}>
              <Text style={styles.level}>{l(language.level)}</Text>
            </View>
          ))}
        </View>
      </Row>
    </View>
  );
}

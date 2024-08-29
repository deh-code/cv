import Container from "../components/Container";
import Section from "../components/Section";
import Title from "../components/Title";
import Chip from "../components/Chip";
import Row from "../components/Row";
import Icon from "../components/Icon";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet, View } from "@react-pdf/renderer";
import skills from "../data/skills";
import useLocalization from "../hooks/localization";
import sections from "../data/sections";

const styles = StyleSheet.create({
  main: {
    alignItems: "start",
  },
  skillBoxContainer: (index) => ({
    width: "50%",
    padding: "8px",
    backgroundColor: index == 1 || index == 2 ? "#f6fdff" : "#fffff6",
    borderBottom: index == 1 ? "1px solid #eee" : "none",
    borderLeft: index == 1 ? "1px solid #eee" : "none",
    borderRight: index == 2 ? "1px solid #eee" : "none",
    borderTop: index == 2 ? "1px solid #eee" : "none",
  }),
  skillBoxHeader: {
    marginBottom: "12px",
    paddingBottom: "4px",
  },
  skillBoxIcon: { marginRight: "8px" },
  skillBoxTitle: { fontStyle: "italic", fontSize: "14px" },
  skillChip: { margin: "0 6px 6px 0" },
});

export default function Skills() {
  const l = useLocalization();

  return (
    <Container>
      <Section icon={faStar} title={l(sections.skills)}>
        <Row style={styles.main}>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillBoxContainer(index)}>
              <Row style={styles.skillBoxHeader}>
                <Icon
                  faIcon={skill.icon}
                  width={skill.iconWidth || "16px"}
                  style={styles.skillBoxIcon}
                ></Icon>
                <Title style={styles.skillBoxTitle}>{l(skill.title)}</Title>
              </Row>
              <Row>
                {skill.items.map((item, index) => (
                  <Chip key={index} style={styles.skillChip}>
                    {item}
                  </Chip>
                ))}
              </Row>
            </View>
          ))}
        </Row>
      </Section>
    </Container>
  );
}

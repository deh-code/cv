import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import Container from "../components/Container";
import Row from "../components/Row";
import Section from "../components/Section";
import sections from "../data/sections";
import workingExperiences from "../data/working-experiences";
import useLocalization from "../hooks/localization";
import { mainStyles } from "../lib/style";

const styles = StyleSheet.create({
  experienceContainer: {
    fontSize: "11px",
  },
  experienceHeader: {
    marginBottom: "4px",
    alignItems: "baseline",
  },
  experienceRole: {
    fontWeight: "bold",
    fontSize: "12px",
  },
  experienceRoleSeparator: { margin: "0 2px 0 4px", fontWeight: "bold" },
  companyLink: {
    textDecoration: "none",
    color: "#417E38",
  },
  companyName: {
    fontWeight: "bold",
    fontSize: "12px",
  },
  experiencePeriod: {
    fontSize: "10px",
    fontStyle: "italic",
    fontWeight: "semibold",
    color: "#666",
    marginBottom: "8px",
  },
  experienceDescription: {
    marginBottom: "4px",
  },
  projectsContainer: { marginBottom: "12px" },
  projectListMarker: { marginRight: "8px" },
  projectDescription: {
    fontSize: "9px",
    color: "#333",
    flex: "1 1 1",
  },
});

export default function Experiences() {
  const l = useLocalization();

  return (
    <Container>
      <Section
        title={l(sections.workingExperiences)}
        icon={faBuilding}
        iconWidth="14px"
      >
        {workingExperiences.map((experience, index) => (
          <View key={index} style={styles.experienceContainer}>
            <Row style={styles.experienceHeader}>
              <Text style={styles.experienceRole}>{l(experience.role)}</Text>
              <Text style={styles.experienceRoleSeparator}> - </Text>
              <Link href={experience.company.link} style={styles.companyLink}>
                <Text style={styles.companyName}>
                  {experience.company.name}
                </Text>
              </Link>
            </Row>
            <Text style={styles.experiencePeriod}>{l(experience.period)}</Text>
            <View style={mainStyles.sectionDescription}>
              {l(experience.descriptions).map((description, index) => (
                <Text key={index} style={styles.experienceDescription}>
                  {description}
                </Text>
              ))}
            </View>
            <View>
              {experience.projects.map((project, index) => (
                <View key={index} style={styles.projectsContainer}>
                  <Row>
                    <View>
                      <Text style={styles.projectListMarker}>-</Text>
                    </View>
                    <View style={styles.projectDescription}>
                      <Text>{l(project.description)}</Text>
                    </View>
                  </Row>
                  <Text style={mainStyles.tag}>
                    {project.skills.join(", ")}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </Section>
    </Container>
  );
}

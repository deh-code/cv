import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import Container from "../components/Container";
import Section from "../components/Section";
import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import Title from "../components/Title";
import useLocalization from "../hooks/localization";
import sections from "../data/sections";
import personalProjects from "../data/personal-projects";

const styles = StyleSheet.create({
  content: {
    fontSize: "9px",
  },
  personalProjectContainer: (index, totalProjects) => ({
    padding: "6px",
    backgroundColor: index % 2 === 0 ? "#fffff6" : "#f4fbff",
    borderBottom: index === totalProjects - 1 ? "none" : "1px solid #eee",
  }),
  projectLink: {
    color: "black",
    textDecoration: "none",
  },
  projectTitle: {
    fontSize: "12px",
  },
});

export default function PersonalProjects() {
  const l = useLocalization();

  return (
    <Container>
      <Section
        title={l(sections.personalProjects)}
        icon={faFileCode}
        iconWidth="14px"
      >
        <View style={styles.content}>
          {personalProjects.map((project, index) => (
            <View
              style={styles.personalProjectContainer(
                index,
                personalProjects.length,
              )}
              key={index}
            >
              <Link href={project.link} style={styles.projectLink}>
                <Title style={styles.projectTitle}>{project.title}</Title>
              </Link>
              <View>
                <Text>{l(project.description)}</Text>
              </View>
            </View>
          ))}
        </View>
      </Section>
    </Container>
  );
}

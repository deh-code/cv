import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import Container from "../components/Container";
import Section from "../components/Section";
import Title from "../components/Title";
import personalProjects from "../data/personal-projects";
import sections from "../data/sections";
import useLocalization from "../hooks/localization";

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
    fontSize: "10px",
  },
});

export default function PersonalProjects() {
  const l = useLocalization();

  return (
    <Container>
      <Section title={l(sections.personalProjects)} icon={faFileCode}>
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

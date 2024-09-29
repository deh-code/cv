import { faAward } from "@fortawesome/free-solid-svg-icons";
import Container from "../components/Container";
import Section from "../components/Section";
import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import Title from "../components/Title";
import useLocalization from "../hooks/localization";
import sections from "../data/sections";
import certifications from "../data/certifications";

const styles = StyleSheet.create({
  content: {
    fontSize: "9px",
  },
  certificationContainer: (index, totalProjects) => ({
    padding: "6px",
    backgroundColor: index % 2 === 0 ? "#fffff6" : "#f4fbff",
    borderBottom: index === totalProjects - 1 ? "none" : "1px solid #eee",
  }),
  certificationLink: {
    color: "black",
    textDecoration: "none",
  },
  certificationTitle: {
    fontSize: "12px",
  },
});

export default function PersonalProjects() {
  const l = useLocalization();

  return (
    <Container>
      <Section
        title={l(sections.certifications)}
        icon={faAward}
        iconWidth="14px"
      >
        <View style={styles.content}>
          {certifications.map((certification, index) => (
            <View
              style={styles.certificationContainer(
                index,
                certifications.length,
              )}
              key={index}
            >
              <Link href={certification.link} style={styles.certificationLink}>
                <Title style={styles.certificationTitle}>
                  {certification.title}
                </Title>
              </Link>
              <View>
                <Text>{l(certification.description)}</Text>
              </View>
            </View>
          ))}
        </View>
      </Section>
    </Container>
  );
}

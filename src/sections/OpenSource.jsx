import { faCodePullRequest } from "@fortawesome/free-solid-svg-icons";
import Container from "../components/Container";
import Section from "../components/Section";
import sections from "../data/sections";
import useLocalization from "../hooks/localization";
import { Link, View } from "@react-pdf/renderer";
import openSource from "../data/open-source";
import Row from "../components/Row";
import Title from "../components/Title";
import Icon from "../components/Icon";
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";

const styles = {
  projectTitle: {
    fontSize: "12px",
    marginRight: "auto",
  },
  projectContainer: (index, totalProjects) => ({
    padding: "6px",
    backgroundColor: index % 2 === 1 ? "#fffff6" : "#f4fbff",
    borderBottom: index === totalProjects - 1 ? "none" : "1px solid #eee",
  }),
};

export default function OpenSource() {
  const l = useLocalization();

  return (
    <Container>
      <Section
        title={l(sections.openSource)}
        icon={faCodePullRequest}
        iconWidth="14px"
      >
        <View>
          {openSource.map((project, index) => (
            <View
              key={index}
              style={styles.projectContainer(index, openSource.length)}
            >
              <Row>
                <Title style={styles.projectTitle}>{project.title}</Title>
                {!!project.links?.github && (
                  <Link href={project.links.github}>
                    <Icon faIcon={faGithub}></Icon>
                  </Link>
                )}
                {!!project.links?.npm && (
                  <Link style={{ marginLeft: "12px" }} href={project.links.npm}>
                    <Icon width={24} faIcon={faNpm}></Icon>
                  </Link>
                )}
              </Row>
            </View>
          ))}
        </View>
      </Section>
    </Container>
  );
}

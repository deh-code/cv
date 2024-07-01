import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import Container from "../components/Container";
import Section from '../components/Section';
import { Link, Text, View } from "@react-pdf/renderer";
import Title from "../components/Title";
import useLocalization from "../hooks/localization";
import sections from "../data/sections";
import personalProjects from "../data/personal-projects";

export default function PersonalProjects() {
  const l = useLocalization();

  return <Container>
    <Section
      title={l(sections.personalProjects)}
      icon={faFileCode}
      iconWidth="14px">
      <View
        style={{
          fontSize: '9px'
        }}>
        {personalProjects.map((project, index) => 
          <View
            style={{
              padding: '6px',
              backgroundColor: index % 2 === 0 ? '#fffff6' : '#f4fbff',
              borderBottom: index === personalProjects.length - 1 ? 'none' : '1px solid #eee'
            }}
            key={index}>
            <Link 
              href={project.link}
              style={{
                color: 'black',
                textDecoration: 'none'
              }}>
              <Title
                style={{
                  fontSize: '12px'
                }}>
                {project.title}
              </Title>
            </Link>
            <View>
              <Text>
                {l(project.description)}
              </Text>
            </View>
          </View>
        )}
      </View>
    </Section>
  </Container>
}
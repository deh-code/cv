import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import Container from "../components/Container";
import Section from "../components/Section";
import { Link, Text, View } from "@react-pdf/renderer";
import Row from "../components/Row";
import useLocalization from "../hooks/localization";
import sections from "../data/sections";
import workingExperiences from "../data/working-experiences";

export default function Experiences() {
  const l = useLocalization();

  return <Container>
    <Section
      title={l(sections.workingExperiences)}
      icon={faBuilding}
      iconWidth="14px">

      {workingExperiences.map((experience, index) => 
        <View 
          key={index}
          style={{
            fontSize: '11px',
          }}>
          <Row
            style={{
              marginBottom: '4px',
              alignItems: 'baseline'
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: '12px'
              }}>
              {l(experience.role)}
            </Text>
            <Text style={{margin: '0 2px 0 4px', fontWeight: 'bold'}}> - </Text>
            <Link
              href={experience.company.link}
              style={{
                textDecoration: 'none',
                color: '#417E38'
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: '12px'
                }}>
                {experience.company.name}
              </Text>
            </Link>
          </Row>
          <Text
            style={{
              fontSize: '10px',
              fontStyle: 'italic',
              fontWeight: 'semibold',
              color: '#666',
              marginBottom: '8px'
            }}>
            {l(experience.period)}
          </Text>
          <View
            style={{
              color: '#333',
              fontWeight: 'medium',
              fontSize: '9px'
            }}>
              {l(experience.descriptions).map((description, index) => 
                <Text
                  key={index}
                  style={{
                    marginBottom: '4px'
                  }}>
                  {description}
                </Text>
              )}
            
          </View>
        </View>)}

    </Section>
  </Container>
}
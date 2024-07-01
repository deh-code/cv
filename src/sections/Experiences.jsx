import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import Container from "../components/Container";
import Section from "../components/Section";
import { Link, Text, View } from "@react-pdf/renderer";
import Row from "../components/Row";

const experiences = [
  {
    company: {
      name: 'Inera srl',
      link: 'https://www.inera.it/'
    },
    role: 'Fullstack Web Developer',
    period: '2022/04 - Now',
    descriptions: [
      'As a Full Stack Developer, I had to manage the entire project lifecycle, from designing REST APIs to the development of the UI.',
      'I used to work in small/medium teams, coordinating with my colleagues with Trello and Gitlab\'s issue board.',
      'I proposed university internships for my company and followed interns until they were hired.'
    ]
  }
]

export default function Experiences() {
  return <Container>
    <Section
      title='Working Experiences'
      icon={faBuilding}
      iconWidth="14px">

      {experiences.map((experience, index) => 
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
              {experience.role}
            </Text>
            <Text> at </Text>
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
            {experience.period}
          </Text>
          <View
            style={{
              color: '#333',
              fontWeight: 'medium',
              fontSize: '9px'
            }}>
              {experience.descriptions.map((description, index) => 
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
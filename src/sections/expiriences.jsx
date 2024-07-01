import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import Container from "../components/container";
import Section from "../components/section";
import { Link, Text, View } from "@react-pdf/renderer";
import Row from "../components/row";

const experiences = [
  {
    company: {
      name: 'Inera srl',
      link: 'https://www.inera.it/'
    },
    role: 'Fullstack Web Developer',
    period: '2022/04 - Now',
    description: 'As a Full Stack Developer, I had to manage the entire project lifecycle, from selecting the database to designing REST APIs.',
    tasks: [
      'React WebApps with UI libraries (bootstrap, Material UI)',
      'Static Websites and JS bundles (Webpack, Gulp)',
      'Backend frameworks (Node.js, Spring Boot, Wordpress)',
      'Security and authentication issues (JWT, input sanification)',
      'Data storage (MySQL)',
      'Containerization and deployment (Docker, SSH, NGINX)'
    ]
  }
]

export default function Experiences() {
  return <Container>
    <Section
      title='Working Experiences'
      icon={faBuilding}>

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
            <Text
              style={{
                marginBottom: '4px'
              }}>
              {experience.description}
            </Text>
            <View>
              <Text
                style={{
                  marginBottom: '2px'
                }}>
                Expierences I gained:  
              </Text>
              {experience.tasks.map((task, index) =>
                <Row
                  key={index}
                  style={{
                    marginBottom: '2px',
                  }}>
                  <Text style={{marginRight: '8px'}}>-</Text>
                  <Text>{task}</Text>
                </Row>
              )}
            </View>

          </View>
        </View>)}

    </Section>
  </Container>
}
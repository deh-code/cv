import Container from "../components/container"
import Section from "../components/section"
import Title from "../components/title"
import Chip from "../components/chip"
import Row from "../components/row"
import Icon from "../components/icon"
import { faGears } from "@fortawesome/free-solid-svg-icons"

export default function Frameworks() {
  return <Container>
  <Section>
    <Row style={{
      marginBottom: '12px',
      borderBottom: '1px solid #eee',
      paddingBottom: '4px',
    }}>
      <Icon faIcon={faGears} width='22px' style={{marginRight: '8px'}}></Icon>
      <Title>Frameworks</Title>
    </Row>
    <Row>
      {[
        'Node.js',
        'Express',
        'Next.js',
        'React',
        'Spring',
        'Wordpress'
      ].map((skill, index) => <Chip style={{marginRight: '8px', marginBottom: '8px'}} key={index}>{skill}</Chip>)}
    </Row>
  </Section>
</Container>
}
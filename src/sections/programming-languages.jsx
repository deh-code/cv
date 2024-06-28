import Container from "../components/container"
import Section from "../components/section"
import Title from "../components/title"
import Chip from "../components/chip"
import Row from "../components/row"
import Icon from "../components/icon"
import { faCode } from "@fortawesome/free-solid-svg-icons"

export default function ProgrammingLanguages() {
  return <Container>
    <Section>
      <Row style={{
        marginBottom: '12px',
        borderBottom: '1px solid #eee',
        paddingBottom: '4px',
      }}>
        <Icon faIcon={faCode} width='16px' style={{ marginRight: '8px' }}></Icon>
        <Title>Programming/Markup Languages</Title>
      </Row>
      <Row>
        {[
          'Javascript',
          'Typescript',
          'Java',
          'PHP',
          'Python',
          'HTML',
          'CSS/SASS',
          'Pug'
        ].map((skill, index) => <Chip style={{ marginRight: '8px', marginBottom: '8px' }} key={index}>{skill}</Chip>)}
      </Row>
    </Section>
  </Container>
}

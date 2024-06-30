import Container from "../components/container"
import Section from "../components/section"
import Title from "../components/title"
import Chip from "../components/chip"
import Row from "../components/row"
import Icon from "../components/icon"
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"

export default function Tools() {
  return <Container>
    <Section>
      <Row style={{
        marginBottom: '12px',
        borderBottom: '1px solid #eee',
        paddingBottom: '4px',
      }}>
        <Icon faIcon={faScrewdriverWrench} width='16px' style={{ marginRight: '8px' }}></Icon>
        <Title>Tools</Title>
      </Row>
      <Row>
        {[
          'npm/yarn/pnpm',
          'MySQL',
          'Docker',
          'Git',
          'VS Code'
        ].map((skill, index) => <Chip style={{ marginBottom: '8px' }} key={index}>{skill}</Chip>)}
      </Row>
    </Section>
  </Container>
}
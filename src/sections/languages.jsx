import Container from "../components/container"
import Section from "../components/section"
import Title from "../components/title"
import Chip from "../components/chip"
import Row from "../components/row"
import Icon from "../components/icon"
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons"

export default function Languages() {
  return <Container>
    <Section>
      <Row style={{
        marginBottom: '12px',
        borderBottom: '1px solid #eee',
        paddingBottom: '4px',
      }}>
        <Icon faIcon={faEarthAmerica} width='16px' style={{ marginRight: '8px' }}></Icon>
        <Title>Languages</Title>
      </Row>
      <Row>
        {[
          'Italian (native)',
          'English (B2)'
        ].map((skill, index) => <Chip style={{ marginRight: '8px', marginBottom: '8px' }} key={index}>{skill}</Chip>)}
      </Row>
    </Section>
  </Container>
}

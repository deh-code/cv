import Container from "../components/container"
import Section from "../components/section"
import Title from "../components/title"
import Chip from "../components/chip"
import { View } from "@react-pdf/renderer"

export default function Languages() {
  return <Container>
  <Section>
    <Title>Languages</Title>
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
      {[
        'Italian (native)',
        'English (B2)'
      ].map((skill, index) => <Chip style={{marginRight: '8px', marginBottom: '8px'}} key={index}>{skill}</Chip>)}
    </View>
  </Section>
</Container>
}

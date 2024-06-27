import Container from "../components/container"
import Section from "../components/section"
import Title from "../components/title"
import Chip from "../components/chip"
import { View } from "@react-pdf/renderer"

export default function Tools() {
  return <Container>
  <Section>
    <Title>Tools</Title>
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
      {[
        'npm/yarn/pnpm',
        'MySQL',
        'Docker',
        'Git',
        'VS Code'
      ].map((skill, index) => <Chip style={{marginRight: '8px', marginBottom: '8px'}} key={index}>{skill}</Chip>)}
    </View>
  </Section>
</Container>
}
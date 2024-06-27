import Container from "../components/container"
import Section from "../components/section"
import Title from "../components/title"
import Chip from "../components/chip"
import { View } from "@react-pdf/renderer"

export default function Frameworks() {
  return <Container>
  <Section style={{marginTop: '32px'}}>
    <Title>Frameworks</Title>
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
      {[
        'Node.js',
        'Express',
        'Next.js',
        'React',
        'Spring',
        'Wordpress'
      ].map((skill, index) => <Chip style={{marginRight: '8px', marginBottom: '8px'}} key={index}>{skill}</Chip>)}
    </View>
  </Section>
</Container>
}
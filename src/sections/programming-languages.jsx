import Container from "../components/container"
import Section from "../components/section"
import Title from "../components/title"
import Chip from "../components/chip"
import { View } from "@react-pdf/renderer"

export default function ProgrammingLanguages() {
  return <Container>
  <Section>
    <Title>Programming/Markup Languages</Title>
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
      {[
        'Javascript',
        'Typescript',
        'Java',
        'PHP',
        'Python',
        'HTML',
        'CSS/SASS',
        'Pug'
      ].map((skill, index) => <Chip style={{marginRight: '8px', marginBottom: '8px'}} key={index}>{skill}</Chip>)}
    </View>
  </Section>
</Container>
}

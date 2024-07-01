import Container from "../components/container"
import Section from "../components/section"
import Title from "../components/title"
import Chip from "../components/chip"
import Row from "../components/row"
import Icon from "../components/icon"
import { faCode, faGears, faGlobeAmericas, faScrewdriverWrench, faStar } from "@fortawesome/free-solid-svg-icons"
import { View } from "@react-pdf/renderer"

const skills = [
  {
    title: 'Frameworks',
    icon: faGears,
    iconWidth: '22px',
    items: [
      'Node.js',
      'Express',
      'Next.js',
      'React',
    ]
  },
  {
    title: 'Tools',
    icon: faScrewdriverWrench,
    items: [
      'npm/yarn/pnpm',
      'MySQL',
      'Docker',
      'Git',
      'VS Code'
    ]
  },
  {
    title: 'Program Langs',
    icon: faCode,
    items: [
      'Javascript',
      'Typescript',
      'Python',
      'HTML',
      'CSS/SASS',
      'Pug'
    ]
  },
  {
    title: 'Languages',
    icon: faGlobeAmericas,
    items: [
      'Italian (native)',
      'English (B2)'
    ]
  },
]

export default function Skills() {
  return <Container>
  <Section
    icon={faStar}
    title='Skills'>
    <Row 
      style={{
        alignItems: 'start'
      }}>
      {skills.map((skill, index) => 
        <View
          key={index}
          style={{
            width: '50%',
            padding: '8px',
            backgroundColor: index == 1 || index == 2 ? '#f6fdff' : '#fffff6',
            borderBottom: index == 1 ? '1px solid #eee' : 'none',
            borderLeft: index == 1 ? '1px solid #eee' : 'none',
            borderRight: index == 2 ? '1px solid #eee' : 'none',
            borderTop: index == 2 ? '1px solid #eee' : 'none',
          }}>
            <Row style={{
              marginBottom: '12px',
              paddingBottom: '4px',
            }}>
              <Icon faIcon={skill.icon} width={skill.iconWidth || '16px'} style={{ marginRight: '8px' }}></Icon>
              <Title style={{fontStyle: 'italic', fontSize: '14px'}}>{skill.title}</Title>
            </Row>
            <Row>
              {skill.items.map((item, index) => <Chip key={index} style={{margin: '0 6px 6px 0'}}>{item}</Chip>)}
            </Row>
        </View>)}
    </Row>
  </Section>
</Container>
}
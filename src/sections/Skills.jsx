import Container from "../components/Container"
import Section from "../components/Section"
import Title from "../components/Title"
import Chip from "../components/Chip"
import Row from "../components/Row"
import Icon from "../components/Icon"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { View } from "@react-pdf/renderer"
import skills from "../data/skills"
import useLocalization from "../hooks/localization"
import sections from "../data/sections"

export default function Skills() {
  const l = useLocalization();

  return <Container>
  <Section
    icon={faStar}
    title={l(sections.skills)}>
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
              <Title style={{fontStyle: 'italic', fontSize: '14px'}}>{l(skill.title)}</Title>
            </Row>
            <Row>
              {skill.items.map((item, index) => <Chip key={index} style={{margin: '0 6px 6px 0'}}>{item}</Chip>)}
            </Row>
        </View>)}
    </Row>
  </Section>
</Container>
}
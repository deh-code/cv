import { Text, View } from "@react-pdf/renderer";
import { faGraduationCap, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Icon from "../components/Icon";
import Row from "../components/Row";
import Title from "../components/Title";

export default function Education() {
  return <View>
  <Row>
    <Icon
      faIcon={faGraduationCap}
      style={{
        marginRight: '4px'
      }}></Icon>
    <Title
      style={{
        fontSize: '14px',
        marginBottom: '8px'
      }}>
      Education
    </Title>
    <Row
      style={{
        fontSize: '9px',
        marginBottom: '4px'
      }}>
      <Text
        style={{
          fontWeight: 'bold'
        }}>
        Bachelor&apos;s degree
      </Text>
      <Text style={{ marginHorizontal: '2px' }}>-</Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontStyle: 'italic'
        }}>
        Computer Science
      </Text>
    </Row>
    <Row>
      <Icon
        faIcon={faLocationDot}
        width='8px'
        fill='#666'
        style={{
          marginRight: '2px'
        }}></Icon>
      <Text
        style={{
          fontWeight: 'semibold',
          fontSize: '9px',
          color: '#666',
          fontStyle: 'italic'
        }}>
        University of Pisa
      </Text>
    </Row>
  </Row>
</View>
}
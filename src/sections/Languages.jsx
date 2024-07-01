import { Text, View } from "@react-pdf/renderer";
import Row from "../components/Row";
import Icon from "../components/Icon";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import Title from "../components/Title";

const languages = [
  {
    name: 'Italian',
    level: 'native'
  },
  {
    name: 'English',
    level: 'B2'
  }
]

export default function Languages() {
  return <View
    style={{
      fontSize: '9px'
    }}>
    <Row>
      <Icon
        faIcon={faGlobeAmericas}
        style={{
          marginRight: '4px'
        }}></Icon>
      <Title
        style={{
          fontSize: '14px',
          marginBottom: '12px'
        }}>
        Languages
      </Title>
    </Row>
    <Row>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch'
        }}>
        {languages.map((language, index) =>
          <View
            key={index}
            style={{
              marginBottom: '2px',
              marginRight: '8px',
              fontWeight: 'bold'
            }}>
            <Text >{language.name}: </Text>
          </View>
        )}
      </View>
      <View>
        {languages.map((language, index) =>
          <View
            key={index}
            style={{
              marginBottom: '2px',
              fontWeight: 'semibold'
            }}>
            <Text style={{ fontStyle: 'italic' }}>{language.level}</Text>
          </View>
        )}
      </View>
    </Row>
  </View>
}
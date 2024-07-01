import { Text, View } from "@react-pdf/renderer";
import Row from "../components/Row";
import Icon from "../components/Icon";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import Title from "../components/Title";
import useLocalization from "../hooks/localization";
import sections from "../data/sections";
import languages from "../data/languages";

export default function Languages() {
  const l = useLocalization();

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
        {l(sections.languages)}
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
            <Text >{l(language.name)}: </Text>
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
            <Text style={{ fontStyle: 'italic' }}>{l(language.level)}</Text>
          </View>
        )}
      </View>
    </Row>
  </View>
}
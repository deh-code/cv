import { Text, View } from "@react-pdf/renderer";
import { faGraduationCap, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Icon from "../components/Icon";
import Row from "../components/Row";
import Title from "../components/Title";
import useLocalization from "../hooks/localization";
import sections from "../data/sections";
import educations from "../data/educations";

export default function Education() {
  const l = useLocalization();

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
        {l(sections.education)}
      </Title>
      <View>
        {educations.map((education, index) =>
          <View
            key={index}>
            <Row
              style={{
                fontSize: '9px',
                marginBottom: '4px'
              }}>
              <Text
                style={{
                  fontWeight: 'bold'
                }}>
                {l(education.title)}
              </Text>
              <Text style={{ marginHorizontal: '2px' }}>-</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontStyle: 'italic'
                }}>
                {l(education.subject)}
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
                {l(education.location)}
              </Text>
            </Row>
          </View>
        )}
      </View>

    </Row>
  </View>
}
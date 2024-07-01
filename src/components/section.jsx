import { View } from "@react-pdf/renderer"
import PropTypes from 'prop-types'
import Title from "./title"
import Row from "./row"
import Icon from "./icon"

export default function Section({ style = {}, title, icon, iconWidth = '20px', children }) {
  return <View
    style={{
      marginBottom: '20px',
      ...style
    }}>
    {!title ?
      <></> :
      <View style={{
        marginBottom: '12px',
        borderBottom: '1px solid #eee',
        paddingBottom: '8px',
      }}>
        <Row
          style={{
            alignItems: 'baseline'
          }}>
          <Icon
            faIcon={icon}
            width={iconWidth}
            style={{
              marginRight: '8px'
            }}></Icon>
          <Title
            style={{
              fontSize: '16px',
              transform: 'translate(0, 4px)'
            }}>
            {title}
          </Title>
        </Row>
      </View>
    }
    {children}
  </View>
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.object,
  iconWidth: PropTypes.string,
}
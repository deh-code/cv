import { View } from "@react-pdf/renderer"
import PropTypes from 'prop-types'
import Title from "./title"
import Row from "./row"
import Icon from "./icon"

export default function Section({style = {}, title, icon, children}) {
  return <View
  style={{
    marginBottom: '36px',
    ...style
  }}>
    {!title ? 
      <></> :  
      <Row style={{
        marginBottom: '12px',
        borderBottom: '1px solid #eee',
        paddingBottom: '4px',
      }}>
        <Icon faIcon={icon} width={'28px'} style={{ marginRight: '8px' }}></Icon>
        <Title
          style={{
            fontSize: '28px'
          }}>{title}</Title>
      </Row>
    }
    {children}
  </View>
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.object
}
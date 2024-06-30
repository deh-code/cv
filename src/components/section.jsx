import { View } from "@react-pdf/renderer"
import PropTypes from 'prop-types'

export default function Section({style = {}, children}) {
  return <View
  style={{
    marginBottom: '36px',
    ...style
  }}>
    {children}
  </View>
}

Section.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}
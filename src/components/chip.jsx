import { View, Text } from "@react-pdf/renderer"
import PropTypes from 'prop-types'

export default function Chip({style = {}, children}) {
  return <View
  style={{
    padding: '4px 8px',
    backgroundColor: '#417E38',
    color: 'white',
    borderRadius: '4px',
    fontWeight: 'medium',
    marginRight: '6px',
    ...style
  }}>
    <Text
      style={{
        fontSize: '14px',
      }}
    >
      {children}
    </Text>
  </View>
}

Chip.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}
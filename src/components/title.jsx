import { Text } from "@react-pdf/renderer"
import PropTypes from 'prop-types'

export default function Title({style = {}, children}) {
  return <Text
  style={{
    fontSize: '18px',
    ...style
  }}>
    {children}
  </Text>
}

Title.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}
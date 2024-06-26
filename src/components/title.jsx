import { Text } from "@react-pdf/renderer"
import PropTypes from 'prop-types'

export default function Title({style = {}, children}) {
  return <Text
  style={{
    marginBottom: '12px',
    fontSize: '20px',
    borderBottom: '1px solid #eee',
    paddingBottom: '4px',
    ...style
  }}>
    {children}
  </Text>
}

Title.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}
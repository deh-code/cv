import { View } from "@react-pdf/renderer";
import PropTypes from 'prop-types';

export default function Row({style = {}, children}) {
  return <View
  style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    ...style
  }}>
    {children}
  </View>
}

Row.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}
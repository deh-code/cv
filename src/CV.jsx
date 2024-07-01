import { Page, Document, StyleSheet, PDFViewer, View, Font } from '@react-pdf/renderer';
import Sidebar from './sections/Sidebar';
import Row from './components/Row';

import openSansSemiBoldItalic from './assets/fonts/open-sans/OpenSans-SemiBoldItalic.ttf';
import openSansSemiBold from './assets/fonts/open-sans/OpenSans-SemiBold.ttf';
import openSansRegular from './assets/fonts/open-sans/OpenSans-Regular.ttf';
import openSansMediumItalic from './assets/fonts/open-sans/OpenSans-MediumItalic.ttf';
import openSansMedium from './assets/fonts/open-sans/OpenSans-Medium.ttf';
import openSansLightItalic from './assets/fonts/open-sans/OpenSans-LightItalic.ttf';
import openSansLight from './assets/fonts/open-sans/OpenSans-Light.ttf';
import openSansItalic from './assets/fonts/open-sans/OpenSans-Italic.ttf';
import openSansExtraBoldItalic from './assets/fonts/open-sans/OpenSans-ExtraBoldItalic.ttf';
import openSansExtraBold from './assets/fonts/open-sans/OpenSans-ExtraBold.ttf';
import openSansBoldItalic from './assets/fonts/open-sans/OpenSans-BoldItalic.ttf';
import openSansBold from './assets/fonts/open-sans/OpenSans-Bold.ttf';
import Skills from './sections/Skills';
import Experiences from './sections/Experiences';
import PersonalProjects from './sections/PersonalProjects';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    display: 'flex',
    fontFamily: 'openSans'
  },
  header: {
    backgroundColor: '#313c4e',
    paddingVertical: '24px',
    color: 'white',
  }
  
});

Font.register({ 
  family: 'openSans', 
  fonts: [
    {
      src: openSansSemiBoldItalic,
      fontStyle: 'italic',
      fontWeight: 'semibold',
    },
    {
      src: openSansSemiBold,
      fontStyle: 'normal',
      fontWeight: 'semibold',
    },
    {
      src: openSansRegular,
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    {
      src: openSansMediumItalic,
      fontStyle: 'italic',
      fontWeight: 'medium',
    },
    {
      src: openSansMedium,
      fontStyle: 'normal',
      fontWeight: 'medium',
    },
    {
      src: openSansLightItalic,
      fontStyle: 'italic',
      fontWeight: 'light',
    },
    {
      src: openSansLight,
      fontStyle: 'normal',
      fontWeight: 'light',
    },
    {
      src: openSansItalic,
      fontStyle: 'italic',
      fontWeight: 'normal',
    },
    {
      src: openSansExtraBoldItalic,
      fontStyle: 'italic',
      fontWeight: 'ultrabold',
    },
    {
      src: openSansExtraBold,
      fontStyle: 'normal',
      fontWeight: 'ultrabold',
    },
    {
      src: openSansBoldItalic,
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
    {
      src: openSansBold,
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
  ]
})

export default function CV() {
  return <PDFViewer width={'100%'} height={'100%'}>
  <Document>
      <Page size="A4" style={styles.page}>
        <Row
          style={{
            alignItems: 'stretch',
            flexGrow: '1',
            flexWrap: 'nowrap',
          }}
        >
          <View
            style={{
              width: '66%',
              paddingTop: '12px'
            }}
          >
            <Skills></Skills>
            <Experiences></Experiences>
            <PersonalProjects></PersonalProjects>
          </View>
          <View
            style={{
              width: '34%',
              backgroundColor: '#f4fbff',
              paddingTop: '12px'
            }}
          >
            <Sidebar></Sidebar>
          </View>
        </Row>
      </Page>
    </Document>
</PDFViewer>;
}
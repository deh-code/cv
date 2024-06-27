import { Page, Text, Document, StyleSheet, PDFViewer, View } from '@react-pdf/renderer';
import Container from './components/container';
import Frameworks from './sections/frameworks';
import Tools from './sections/tools';
import ProgrammingLanguages from './sections/programming-languages';
import Languages from './sections/languages';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    display: 'flex',
  },
  header: {
    backgroundColor: '#313c4e',
    paddingVertical: '24px',
    color: 'white',
  }
  
});

// Create Document Component
export default function App () {
 console.log('render')
 return <PDFViewer width={'100%'} height={'100%'}>
  <Document>
      <Page size="A4" style={styles.page}>
        <Container style={styles.header}>
          <Text style={{fontSize: '32px'}}>Ruben Fileti</Text>
        </Container>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            flexGrow: '1'
          }}
        >
          <View
            style={{
              width: '66%'
            }}
          >
            <Frameworks></Frameworks>
            <Tools></Tools>
            <ProgrammingLanguages></ProgrammingLanguages>
            <Languages></Languages>
          </View>
          <View
            style={{
              width: '34%',
              backgroundColor: '#f4fbff',
            }}
          >
          </View>
        </View>
      </Page>
    </Document>
</PDFViewer>
}
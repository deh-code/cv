import { Page, Text, Document, StyleSheet, PDFViewer, View } from '@react-pdf/renderer';
import Container from './components/container';
import Section from './components/section';
import Title from './components/title';
import Chip from './components/chip';

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
            <Container style={styles.section}>
              <Section style={{marginTop: '32px'}}>
                <Title>Frameworks</Title>
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap'
                }}>
                  {[
                    'Node.js',
                    'Express',
                    'Next.js',
                    'React',
                    'Spring',
                    'Wordpress'
                  ].map((skill, index) => <Chip style={{marginRight: '8px', marginBottom: '8px'}} key={index}>{skill}</Chip>)}
                </View>
              </Section>
            </Container>
            <Container style={styles.section}>
              <Section>
                <Title>Tools</Title>
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap'
                }}>
                  {[
                    'npm/yarn/pnpm',
                    'MySQL',
                    'Docker',
                    'Git',
                    'VS Code'
                  ].map((skill, index) => <Chip style={{marginRight: '8px', marginBottom: '8px'}} key={index}>{skill}</Chip>)}
                </View>
              </Section>
            </Container>
            <Container style={styles.section}>
              <Section>
                <Title>Programming/Markup Languages</Title>
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap'
                }}>
                  {[
                    'Javascript',
                    'Typescript',
                    'Java',
                    'PHP',
                    'Python',
                    'HTML',
                    'CSS/SASS',
                    'Pug'
                  ].map((skill, index) => <Chip style={{marginRight: '8px', marginBottom: '8px'}} key={index}>{skill}</Chip>)}
                </View>
              </Section>
            </Container>
            <Container style={styles.section}>
              <Section>
                <Title>Languages</Title>
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap'
                }}>
                  {[
                    'Italian (native)',
                    'English (B2)'
                  ].map((skill, index) => <Chip style={{marginRight: '8px', marginBottom: '8px'}} key={index}>{skill}</Chip>)}
                </View>
              </Section>
            </Container>
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
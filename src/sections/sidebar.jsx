import { Image, Link, Text, View } from "@react-pdf/renderer";
import Container from "../components/container";
import profile from '../assets/profile.jpeg'
import git from '../assets/github-mark.png';
import linkedin from '../assets/LI-In-Bug.png'

export default function Sidebar() {
  return <Container
    style={{
      paddingHorizontal: '12px'
    }}
  >
    <Text
      style={{
        fontSize: '32px',
        marginBottom: '16px'
      }}
    >Ruben Fileti</Text>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        marginBottom: '16px'
      }}>
      <View
        style={{
          width: '50%',
          paddingRight: '6px'
        }}>
          <Image src={profile} style={{
            borderRadius: '8px'
          }}></Image>
        </View>
      <View 
        style={{
          width: '50%',
          paddingLeft: '6px'
        }}>
          <Text
            style={{
              fontSize: '15px',
            }}
          >Fullstack</Text>
          <Text
            style={{
              fontSize: '15px',
              marginBottom: '12px'
            }}
          >Developer</Text>
          <Text
            style={{
              fontSize: '11px',
              color: '#666',
              fontStyle: 'italic'
            }}>
              Pisa, Italy
            </Text>
      </View>
    </View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <Link 
          href="https://github.com/deh-code"
          style={{
            display: "flex",
            flexDirection: 'row',
            alignItems: 'center',
            fontSize: '11px',
            color: 'black',
            textDecoration: 'none',
            marginBottom: '8px',
            marginRight: '16px',
          }}>
          <Image style={{width: '18px', marginRight: '2px'}} src={git}/>
          <Text>GitHub</Text>
        </Link>
        <Link 
          href="www.linkedin.com/in/ruben-fileti-423a221b2"
          style={{
            display: "flex",
            flexDirection: 'row',
            alignItems: 'center',
            fontSize: '11px',
            color: 'black',
            textDecoration: 'none',
            marginBottom: '12px'
          }}>
          <Image style={{width: '18px', marginRight: '2px'}} src={linkedin}/>
          <Text>LinkedIn</Text>
        </Link>
      </View>
  </Container>
}
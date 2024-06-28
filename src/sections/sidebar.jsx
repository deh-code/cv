import { Image, Link, Text, View } from "@react-pdf/renderer";
import Container from "../components/container";
import profile from '../assets/images/profile.jpeg'
import git from '../assets/images/github-mark.png';
import linkedin from '../assets/images/LI-In-Bug.png'
import { faEnvelope, faLocationDot, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import Icon from "../components/icon";
import Row from "../components/row";

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
    <Row
      style={{
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
          paddingLeft: '6px',
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
          <Row 
            style={{
              fontSize: '11px',
              color: '#666'
            }}
          >
            <Icon fill='#666' width='10px' style={{marginRight: '2px'}} faIcon={faLocationDot}></Icon>
            <Text>
                Pisa, Italy
              </Text>
          </Row>
      </View>
    </Row>
    <View
      style={{
        marginBottom: '24px',
        fontSize: '11px',
        color: '#666'
      }}>
        <Row style={{marginBottom: '8px'}}>
          <Icon fill='#666' width='10px' style={{marginRight: '3px'}} faIcon={faMobileScreen}></Icon>
          <Text>+3899164109</Text>
        </Row>
        <Row>
          <Icon fill='#666' width='10px' style={{marginRight: '3px'}} faIcon={faEnvelope}></Icon>
          <Text>ruben.fileti.3@gmail.com</Text>
        </Row>
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
            marginRight: '16px',
          }}>
          <Image style={{width: '14px', marginRight: '2px'}} src={git}/>
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
          }}>
          <Image style={{width: '14px', marginRight: '2px'}} src={linkedin}/>
          <Text>LinkedIn</Text>
        </Link>
      </View>
  </Container>
}
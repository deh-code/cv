import { Image, Link, Text, View } from "@react-pdf/renderer";
import Container from "../components/Container";
import profile from '../assets/images/profile.jpeg'
import git from '../assets/images/github-mark.png';
import linkedin from '../assets/images/LI-In-Bug.png'
import { faEnvelope, faLocationDot, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import Icon from "../components/Icon";
import Row from "../components/Row";
import Education from "./Education";
import Languages from "./Languages";

const links = [
  {
    href: 'https://github.com/deh-code',
    title: 'GitHub',
    icon: git
  },
  {
    href: 'www.linkedin.com/in/ruben-fileti-423a221b2',
    title: 'LinkedIn',
    icon: linkedin
  }
]

const contacts = [
  {
    text: '+3899164109',
    icon: faMobileScreen
  },
  {
    text: 'ruben.fileti.3@gmail.com',
    icon: faEnvelope
  },
]

export default function Sidebar() {
  return <Container
    style={{
      paddingHorizontal: '12px'
    }}
  >
    <View
      style={{
        borderBottom: '1px solid #eee',
        paddingBottom: '16px',
        marginBottom: '16px'
      }}>
      <Text
        style={{
          fontSize: '28px',
          fontWeight: 'bold',
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
            paddingLeft: '6px'
          }}>
          <Text
            style={{
              fontSize: '15px',
              fontWeight: 'semibold'
            }}
          >Fullstack</Text>
          <Text
            style={{
              fontSize: '15px',
              fontWeight: 'semibold',
            }}
          >Developer</Text>
          <Row
            style={{
              fontSize: '11px',
              color: '#666',
              marginTop: '16px'
            }}
          >
            <Icon fill='#666' width='8px' style={{ marginRight: '2px' }} faIcon={faLocationDot}></Icon>
            <Text
              style={{
                fontStyle: 'italic',
                fontWeight: 'medium',
                fontSize: '10px'
              }}>
              Pisa, Italy
            </Text>
          </Row>
        </View>
      </Row>
      <View
        style={{
          marginBottom: '10px',
          fontSize: '10px',
          color: '#666'
        }}>
        {contacts.map((contact, index) =>
          <Row key={index} style={{ marginBottom: '8px' }}>
            <Icon fill='#666' width='10px' style={{ marginRight: '3px' }} faIcon={contact.icon}></Icon>
            <Text>{contact.text}</Text>
          </Row>
        )}
      </View>
      <Row>
        {links.map((link, index) =>
          <Link
            key={index}
            href={link.href}
            style={{
              display: "flex",
              flexDirection: 'row',
              alignItems: 'center',
              fontSize: '11px',
              fontWeight: 'medium',
              color: 'black',
              textDecoration: 'none',
              marginRight: '16px',
            }}>
            <Image style={{ width: '14px', marginRight: '2px' }} src={link.icon} />
            <Text>{link.title}</Text>
          </Link>
        )}
      </Row>
    </View>
    <View
      style={{
        marginBottom: '20px'
      }}>
      <Education></Education>
    </View>
    <View
      style={{
        marginBottom: '20px'
      }}>
      <Languages></Languages>
    </View>
  </Container>
}
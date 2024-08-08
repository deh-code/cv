import { Image, Link, Text, View } from "@react-pdf/renderer";
import Container from "../components/Container";
import git from "../assets/images/github-mark.png";
import linkedin from "../assets/images/LI-In-Bug.png";
import Icon from "../components/Icon";
import Row from "../components/Row";
import Education from "./Education";
import Languages from "./Languages";
import Bio from "./Bio";
import contacts from "../data/contacts";
import useLocalization from "../hooks/localization";
import profileImage from "../assets/images/profile.jpeg";

const links = [
  {
    href: "https://github.com/deh-code",
    title: "GitHub",
    icon: git,
  },
  {
    href: "www.linkedin.com/in/ruben-fileti-423a221b2",
    title: "LinkedIn",
    icon: linkedin,
  },
];

export default function Sidebar() {
  const l = useLocalization();
  return (
    <Container
      style={{
        paddingHorizontal: "12px",
      }}
    >
      <View
        style={{
          borderBottom: "1px solid #eee",
          paddingBottom: "16px",
          marginBottom: "16px",
        }}
      >
        <View
          style={{
            marginBottom: "16px",
          }}
        >
          <Text
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "0px",
            }}
          >
            Ruben Fileti
          </Text>
          <Text
            style={{
              fontSize: "12px",
              fontWeight: "semibold",
              fontStyle: "italic",
            }}
          >
            Fullstack Developer
          </Text>
        </View>
        <View
          style={{
            width: "60%",
            overflow: "hidden",
            borderRadius: "6px",
            marginBottom: "16px",
          }}
        >
          <Image src={profileImage}></Image>
        </View>
        <View
          style={{
            marginBottom: "10px",
            fontSize: "10px",
            color: "#666",
          }}
        >
          {contacts.map((contact, index) => (
            <Row key={index} style={{ marginBottom: "8px" }}>
              <Icon
                fill="#666"
                width="10px"
                style={{ marginRight: "3px" }}
                faIcon={contact.icon}
              ></Icon>
              <Text>{l(contact.text)}</Text>
            </Row>
          ))}
        </View>
        <Row>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontSize: "11px",
                fontWeight: "medium",
                color: "black",
                textDecoration: "none",
                marginRight: "16px",
              }}
            >
              <Image
                style={{ width: "14px", marginRight: "2px" }}
                src={link.icon}
              />
              <Text>{link.title}</Text>
            </Link>
          ))}
        </Row>
      </View>
      <View
        style={{
          marginBottom: "20px",
        }}
      >
        <Bio></Bio>
      </View>
      <View
        style={{
          marginBottom: "20px",
        }}
      >
        <Education></Education>
      </View>
      <View
        style={{
          marginBottom: "20px",
        }}
      >
        <Languages></Languages>
      </View>
    </Container>
  );
}

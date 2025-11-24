import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import git from "../assets/images/github-mark.png";
import linkedin from "../assets/images/LI-In-Bug.png";
import profileImage from "../assets/images/profile.jpeg";
import Contact from "../components/Contact";
import Container from "../components/Container";
import Row from "../components/Row";
import SocialLink from "../components/SocialLink";
import contacts from "../data/contacts";
import useLocalization from "../hooks/localization";
import Bio from "./Bio";
import Education from "./Education";
import Languages from "./Languages";

const styles = StyleSheet.create({
  content: {
    marginBottom: "10px",
    alignItems: "flex-start",
  },
  headerTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "0px",
  },
  headerSubtitle: {
    fontSize: "12px",
    fontWeight: "semibold",
    fontStyle: "italic",
    marginBottom: "8px",
  },
  profileImageContainer: {
    width: "20%",
    overflow: "hidden",
    borderRadius: "6px",
    marginBottom: "16px",
    marginRight: "16px",
  },
  contactsContainer: {
    marginBottom: "10px",
    fontSize: "8px",
    color: "#666",
  },
  contact: { marginBottom: "2px" },
  socialLink: {
    marginRight: "16px",
  },
  educationContainer: {
    marginBottom: "8px",
  },
});

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

export default function TopBar() {
  const l = useLocalization();
  return (
    <Container>
      <View style={styles.content}>
        <Row>
          <View style={styles.profileImageContainer}>
            <Image src={profileImage}></Image>
          </View>
          <View>
            <View>
              <Text style={styles.headerTitle}>Ruben Fileti</Text>
              <Text style={styles.headerSubtitle}>Fullstack Developer</Text>
            </View>
            <View style={styles.contactsContainer}>
              {contacts.map((contact, index) => (
                <View key={index} style={styles.contact}>
                  <Contact icon={contact.icon}>{l(contact.text)}</Contact>
                </View>
              ))}
            </View>
            <Row>
              {links.map((link, index) => (
                <View key={index} style={styles.socialLink}>
                  <SocialLink href={link.href} icon={link.icon}>
                    {link.title}
                  </SocialLink>
                </View>
              ))}
            </Row>
          </View>
          <View style={{ marginLeft: "48px" }}>
            <View style={styles.educationContainer}>
              <Education></Education>
            </View>
            <View>
              <Languages></Languages>
            </View>
          </View>
        </Row>
        <View>
          <Bio></Bio>
        </View>
      </View>
    </Container>
  );
}

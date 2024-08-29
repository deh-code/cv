import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import Container from "../components/Container";
import git from "../assets/images/github-mark.png";
import linkedin from "../assets/images/LI-In-Bug.png";
import Row from "../components/Row";
import Education from "./Education";
import Languages from "./Languages";
import Bio from "./Bio";
import contacts from "../data/contacts";
import useLocalization from "../hooks/localization";
import profileImage from "../assets/images/profile.jpeg";
import Contact from "../components/Contact";
import SocialLink from "../components/SocialLink";

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: "12px",
  },
  content: {
    borderBottom: "1px solid #eee",
    paddingBottom: "16px",
    marginBottom: "16px",
  },
  header: {
    marginBottom: "16px",
  },
  headerTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "0px",
  },
  headerSubtitle: {
    fontSize: "12px",
    fontWeight: "semibold",
    fontStyle: "italic",
  },
  profileImageContainer: {
    width: "60%",
    overflow: "hidden",
    borderRadius: "6px",
    marginBottom: "16px",
  },
  contactsContainer: {
    marginBottom: "10px",
    fontSize: "10px",
    color: "#666",
  },
  contact: { marginBottom: "8px" },
  socialLink: {
    marginRight: "16px",
  },
  bioContainer: {
    marginBottom: "20px",
  },
  educationContainer: {
    marginBottom: "20px",
  },
  languagesContainer: {
    marginBottom: "20px",
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

export default function Sidebar() {
  const l = useLocalization();
  return (
    <Container style={styles.main}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Ruben Fileti</Text>
          <Text style={styles.headerSubtitle}>Fullstack Developer</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Image src={profileImage}></Image>
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
      <View style={styles.bioContainer}>
        <Bio></Bio>
      </View>
      <View style={styles.educationContainer}>
        <Education></Education>
      </View>
      <View style={styles.languagesContainer}>
        <Languages></Languages>
      </View>
    </Container>
  );
}

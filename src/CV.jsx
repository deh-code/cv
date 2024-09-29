import {
  Page,
  Document,
  StyleSheet,
  PDFViewer,
  View,
} from "@react-pdf/renderer";
import Sidebar from "./sections/Sidebar";
import Row from "./components/Row";

import Skills from "./sections/Skills";
import Experiences from "./sections/Experiences";
import PersonalProjects from "./sections/PersonalProjects";
import { useContext } from "react";
import { LocaleContext } from "./App";
import { loadFonts } from "./lib/font";
import OpenSource from "./sections/OpenSource";
import Certifications from "./sections/Certifications";

loadFonts();

// Create styles
const styles = StyleSheet.create({
  main: {
    alignItems: "stretch",
    flexGrow: "1",
    flexWrap: "nowrap",
  },
  page: {
    backgroundColor: "white",
    display: "flex",
    fontFamily: "openSans",
    paddingVertical: 20,
  },
  header: {
    backgroundColor: "#313c4e",
    paddingVertical: "24px",
    color: "white",
  },
  content: {
    width: "66%",
  },
  sidebar: {
    width: "34%",
  },
  sidebarBackdrop: {
    width: "34%",
    backgroundColor: "#f4fbff",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
    marginVertical: -20,
  },
});

export default function CV() {
  const locale = useContext(LocaleContext);

  return (
    <PDFViewer width={"100%"} height={"100%"}>
      <Document>
        <LocaleContext.Provider value={locale}>
          <Page size="A4" style={styles.page}>
            <Row style={styles.main}>
              <View style={styles.content}>
                <View>
                  <Skills></Skills>
                </View>
                <View>
                  <Experiences></Experiences>
                </View>
                <View>
                  <PersonalProjects></PersonalProjects>
                </View>
                <View>
                  <OpenSource></OpenSource>
                </View>
                <View>
                  <Certifications></Certifications>
                </View>
              </View>
              <View style={styles.sidebar}>
                <Sidebar></Sidebar>
              </View>
              <View style={styles.sidebarBackdrop} fixed></View>
            </Row>
          </Page>
        </LocaleContext.Provider>
      </Document>
    </PDFViewer>
  );
}

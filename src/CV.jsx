import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import TopBar from "./sections/Sidebar";

import { useContext } from "react";
import { LocaleContext } from "./App";
import { loadFonts } from "./lib/font";
import Certifications from "./sections/Certifications";
import Experiences from "./sections/Experiences";
import OpenSource from "./sections/OpenSource";
import PersonalProjects from "./sections/PersonalProjects";
import Skills from "./sections/Skills";
import TechnicalTags from "./sections/TechnicalTags";

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
});

export default function CV() {
  const locale = useContext(LocaleContext);

  return (
    <PDFViewer width={"100%"} height={"100%"}>
      <Document>
        <LocaleContext.Provider value={locale}>
          <Page size="A4" style={styles.page}>
            <View style={styles.sidebar}>
              <TopBar></TopBar>
            </View>
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
              <View>
                <TechnicalTags></TechnicalTags>
              </View>
            </View>
          </Page>
        </LocaleContext.Provider>
      </Document>
    </PDFViewer>
  );
}

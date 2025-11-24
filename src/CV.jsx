import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import TopBar from "./sections/TopBar";

import { useContext } from "react";
import { LocaleContext } from "./App";
import { loadFonts } from "./lib/font";
import Certifications from "./sections/Certifications";
import Experiences from "./sections/Experiences";
import PersonalProjects from "./sections/PersonalProjects";
import Skills from "./sections/Skills";

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
    paddingVertical: "10px",
  },
});

export default function CV() {
  const locale = useContext(LocaleContext);

  return (
    <PDFViewer width={"100%"} height={"100%"}>
      <Document>
        <LocaleContext.Provider value={locale}>
          <Page size="A4" style={styles.page}>
            <View>
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
                <Certifications></Certifications>
              </View>
            </View>
          </Page>
        </LocaleContext.Provider>
      </Document>
    </PDFViewer>
  );
}

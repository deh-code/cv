import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@react-pdf/renderer";
import Container from "../components/Container";
import Row from "../components/Row";
import Section from "../components/Section";
import sections from "../data/sections";
import technicalTags from "../data/technical-tags";
import useLocalization from "../hooks/localization";
import { mainStyles } from "../lib/style";

export default function TechnicalTags() {
  const l = useLocalization();

  return (
    <Container>
      <Section icon={faStar} title={l(sections.technicalTags)}>
        <Row>
          <Text style={mainStyles.sectionDescription}>
            {l(technicalTags.description)}
          </Text>
          <Text style={mainStyles.tag}>{technicalTags.items.join(" | ")}</Text>
        </Row>
      </Section>
    </Container>
  );
}

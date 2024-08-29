import { StyleSheet, Text, View } from "@react-pdf/renderer";
import useLocalization from "../hooks/localization";
import bio from "../data/bio";

const styles = StyleSheet.create({
  main: {
    fontSize: "9px",
    fontWeight: "medium",
  },
});

export default function Bio() {
  const l = useLocalization();

  return (
    <View style={styles.main}>
      <Text>{l(bio)}</Text>
    </View>
  );
}

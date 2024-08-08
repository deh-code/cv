import { Text, View } from "@react-pdf/renderer";
import useLocalization from "../hooks/localization";
import bio from "../data/bio";

export default function Bio() {
  const l = useLocalization();

  return (
    <View
      style={{
        fontSize: "9px",
        fontWeight: "medium",
      }}
    >
      <Text>{l(bio)}</Text>
    </View>
  );
}

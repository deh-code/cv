import { useCallback, useContext } from "react";
import { LocaleContext } from "../App";

export default function useLocalization() {
  const locale = useContext(LocaleContext);

  return useCallback(
    (obj) => {
      return obj[locale] ?? obj["en"] ?? obj;
    },
    [locale],
  );
}

import { Font } from "@react-pdf/renderer";

import openSansSemiBoldItalic from "../assets/fonts/open-sans/OpenSans-SemiBoldItalic.ttf";
import openSansSemiBold from "../assets/fonts/open-sans/OpenSans-SemiBold.ttf";
import openSansRegular from "../assets/fonts/open-sans/OpenSans-Regular.ttf";
import openSansMediumItalic from "../assets/fonts/open-sans/OpenSans-MediumItalic.ttf";
import openSansMedium from "../assets/fonts/open-sans/OpenSans-Medium.ttf";
import openSansLightItalic from "../assets/fonts/open-sans/OpenSans-LightItalic.ttf";
import openSansLight from "../assets/fonts/open-sans/OpenSans-Light.ttf";
import openSansItalic from "../assets/fonts/open-sans/OpenSans-Italic.ttf";
import openSansExtraBoldItalic from "../assets/fonts/open-sans/OpenSans-ExtraBoldItalic.ttf";
import openSansExtraBold from "../assets/fonts/open-sans/OpenSans-ExtraBold.ttf";
import openSansBoldItalic from "../assets/fonts/open-sans/OpenSans-BoldItalic.ttf";
import openSansBold from "../assets/fonts/open-sans/OpenSans-Bold.ttf";

export function loadFonts() {
  Font.register({
    family: "openSans",
    fonts: [
      {
        src: openSansSemiBoldItalic,
        fontStyle: "italic",
        fontWeight: "semibold",
      },
      {
        src: openSansSemiBold,
        fontStyle: "normal",
        fontWeight: "semibold",
      },
      {
        src: openSansRegular,
        fontStyle: "normal",
        fontWeight: "normal",
      },
      {
        src: openSansMediumItalic,
        fontStyle: "italic",
        fontWeight: "medium",
      },
      {
        src: openSansMedium,
        fontStyle: "normal",
        fontWeight: "medium",
      },
      {
        src: openSansLightItalic,
        fontStyle: "italic",
        fontWeight: "light",
      },
      {
        src: openSansLight,
        fontStyle: "normal",
        fontWeight: "light",
      },
      {
        src: openSansItalic,
        fontStyle: "italic",
        fontWeight: "normal",
      },
      {
        src: openSansExtraBoldItalic,
        fontStyle: "italic",
        fontWeight: "ultrabold",
      },
      {
        src: openSansExtraBold,
        fontStyle: "normal",
        fontWeight: "ultrabold",
      },
      {
        src: openSansBoldItalic,
        fontStyle: "italic",
        fontWeight: "bold",
      },
      {
        src: openSansBold,
        fontStyle: "normal",
        fontWeight: "bold",
      },
    ],
  });
}

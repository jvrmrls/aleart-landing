import FontfabricIntroBlack from "/fonts/Fontfabric_-_IntroBlack.otf";
import FontfabricIntroBlackAlt from "/fonts/Fontfabric_-_IntroBlackAlt.otf";
import FontfabricIntroBlackInline from "/fonts/Fontfabric_-_IntroBlackInline.otf";

import FontfabricIntroBold from "/fonts/Fontfabric_-_IntroBold.otf";

import FontfabricIntroCondBlack from "/fonts/Fontfabric_-_IntroCondBlack.otf";
import FontfabricIntroCondBoldAlt from "/fonts/Fontfabric_-_IntroCondBoldAlt.otf";
import FontfabricIntroCondSemiBold from "/fonts/Fontfabric_-_IntroCondSemiBold.otf";
import FontfabricIntroCondSemiBold_1 from "/fonts/Fontfabric_-_IntroCondSemiBold_(1).otf";
import FontfabricIntroLight from "/fonts/Fontfabric_-_IntroLight.otf";
import FontfabricIntroRegular from "/fonts/Fontfabric_-_IntroRegular.otf";
import FontfabricIntroSemiBold from "/fonts/Fontfabric_-_IntroSemiBold.otf";
import FontfabricIntroThin from "/fonts/Fontfabric_-_IntroThin.otf";

import IntroBoldCaps from "/fonts/Intro-Bold-Caps.otf";
import IntroBook from "/fonts/Intro-Book.otf";

const MuiCssBaseline = {
  styleOverrides: {
    fallbacks: [
      // Intro
      {
        "@font-face": {
          fontFamily: "Intro",
          src: `url(${FontfabricIntroThin}) format("opentype")`,
          fontWeight: 200,
          fontStyle: "normal",
          fontDisplay: "swap",
          fontStretch: "normal",
        },
      },
      {
        "@font-face": {
          fontFamily: "Intro",
          src: `url(${FontfabricIntroLight}) format("opentype")`,
          fontWeight: 300,
          fontStyle: "normal",
          fontDisplay: "swap",
          fontStretch: "normal",
        },
      },

      {
        "@font-face": {
          fontFamily: "Intro",
          src: `url(${FontfabricIntroRegular}) format("opentype")`,
          fontWeight: 400,
          fontStyle: "normal",
          fontDisplay: "swap",
          fontStretch: "normal",
        },
      },
      {
        "@font-face": {
          fontFamily: "Intro",
          fontWeight: 600,
          fontStyle: "normal",
          fontStretch: "normal",
          fontDisplay: "swap",
          src: `url(${FontfabricIntroSemiBold}) format("opentype")`,
        },
      },
      {
        "@font-face": {
          fontFamily: "Intro",
          src: `url(${FontfabricIntroCondSemiBold}) format("opentype")`,
          fontWeight: 600,
          fontStyle: "normal",
          fontDisplay: "swap",
          fontStretch: "condensed",
        },
      },
      {
        "@font-face": {
          fontFamily: "Intro",
          src: `url(${FontfabricIntroCondSemiBold_1}) format("opentype")`,
          fontWeight: 600,
          fontStyle: "normal",
          fontDisplay: "swap",
          fontStretch: "condensed",
        },
      },
      {
        "@font-face": {
          fontFamily: "Intro",
          src: `url(${FontfabricIntroBold}) format("opentype")`,
          fontWeight: 700,
          fontStyle: "normal",
          fontDisplay: "swap",
          fontStretch: "normal",
        },
      },
      {
        "@font-face": {
          fontFamily: "Intro",
          src: `url(${FontfabricIntroCondBoldAlt}) format("opentype")`,
          fontWeight: 700,
          fontStyle: "normal",
          fontDisplay: "swap",
          fontStretch: "condensed",
        },
      },
      {
        "@font-face": {
          fontFamily: "Intro",
          src: `url(${FontfabricIntroBlack}) format("opentype")`,
          fontWeight: 900,
          fontStyle: "normal",
          fontDisplay: "swap",
          fontStretch: "normal",
        },
      },
      {
        "@font-face": {
          fontFamily: "Intro",
          src: `url(${FontfabricIntroBlackAlt}) format("opentype")`,
          fontWeight: 900,
          fontStyle: "normal",
          fontDisplay: "swap",
          fontStretch: "normal",
        },
      },
      {
        "@font-face": {
          fontFamily: "Intro",
          src: `url(${FontfabricIntroBlackInline}) format("opentype")`,
          fontWeight: 900,
          fontStyle: "normal",
          fontDisplay: "swap",
          fontStretch: "normal",
        },
      },
      {
        "@font-face": {
          fontFamily: "Intro",
          src: `url(${FontfabricIntroCondBlack}) format("opentype")`,
          fontWeight: 900,
          fontStyle: "normal",
          fontDisplay: "swap",
          fontStretch: "condensed",
        },
      },
      {
        "@font-face": {
          fontFamily: "IntroBoldCaps",
          src: `url(${IntroBoldCaps}) format("opentype")`,
          fontWeight: 600,
          fontStyle: "normal",
          fontDisplay: "swap",
        },
      },
      {
        "@font-face": {
          fontFamily: "IntroBook",
          src: `url(${IntroBook}) format("opentype")`,
          fontWeight: 400,
          fontStyle: "normal",
          fontDisplay: "swap",
        },
      },
    ],
  },
};

export default MuiCssBaseline;

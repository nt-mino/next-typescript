import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import type { ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: "0em", //         min-width:     0px
  md: "32.5em", //    min-width:   520px
  lg: "62em", //      min-width:   992px
  xl: "80em", //      min-width: 1,280px
  "2xl": "96em", //   min-width: 1,536px
});

const theme = extendTheme({
  config,
  colors: {
    primaryAlpha: {
      50: "#f4f7fa",
      100: "#eff9ff",
      200: "#eff9ff",
      300: "#3ebdf3",
      400: "#00a1e8",
      500: "#00a1e8",
      600: "#008cdc",
      700: "#008cdc",
      800: "#008cdc",
      900: "#263843",
    },
    primary: "#00a1e8",
    "primary-dark": "#008cdc",
    "primary-bright1": "#3ebdf3",
    "primary-bright2": "#a0dcff",
    "primary-bright3": "#eff9ff",
    secondary: "#f44d60",
    "secondary-dark": "#db2d40",
    "secondary-bright1": "#f47676",
    "secondary-bright2": "#ffb5b5",
    "secondary-bright3": "#fff7f7",
    accent1: "#5ac843",
    "accent1-dark": "#40ae4b",
    "accent1-bright1": "#8ada4b",
    "accent1-bright2": "#b2f296",
    "accent1-bright3": "#f5fff0",
    accent2: "#ffa028",
    "accent2-bright1": "#ffda89",
    accent3: "#785ad2",
    "accent3-bright1": "#ccbbf3",
    body: "#263843",
    "body-modal": "rgba(38, 56, 67, 0.2)",
    gray1: "#878b93",
    gray2: "#caced6",
    gray3: "#ecedf0",
    gray4: "#E3E5EA",
    "input-gray": "#e2e8f0",
    background1: "#ffffff",
    background2: "#f4f7fa",
  },
  fonts: {
    heading: "'M PLUS Rounded 1c'",
    body: "'M PLUS Rounded 1c'",
  },
  breakpoints,
  components: {
    Heading: {
      baseStyle: {
        color: "body",
      },
    },
    Text: {
      baseStyle: {
        color: "body",
      },
    },
  },
});

export default theme;

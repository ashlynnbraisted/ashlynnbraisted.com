// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#e8edfb",
      100: "#c7d2f7",
      200: "#a4b5f3",
      300: "#7a91ef",
      400: "#4f6cea",
      500: "#0d41e1",
      600: "#0b38c1",
      700: "#082c91",
      800: "#06216b",
      900: "#051751",
    },
    secondary: {
      50: "#fbfbfb",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#c8c8c8",
      500: "#aaaaaa",
      600: "#888888",
      700: "#666666",
      800: "#444444",
      900: "#222222",
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: "secondary.800",
      },
    },
  },
});

export default theme;

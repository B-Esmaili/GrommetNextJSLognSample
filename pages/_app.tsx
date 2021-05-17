import App from "next/app";
import { Grommet, grommet as grommetTheme } from "grommet";
import { ContextProvider } from "../context";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Grommet theme={grommetTheme}>
          <ContextProvider>
            <Component {...pageProps} />
          </ContextProvider>
        </Grommet>
      </ThemeProvider>
    );
  }
}

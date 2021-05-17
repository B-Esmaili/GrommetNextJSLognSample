import App from "next/app";
import { Grommet, grommet as grommetTheme } from "grommet";
import { ContextProvider } from "../context";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Grommet theme={grommetTheme}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </Grommet>
    );
  }
}

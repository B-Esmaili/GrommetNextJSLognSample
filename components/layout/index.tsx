import { Box, Grid } from "grommet";
import React from "react";
import SideBar from "./sidebar";
import { LayoutProps } from "./types";
import styled from 'styled-components';

const Container = styled(Grid)`
    min-height:100vh;
`;

const Layout: React.FC<LayoutProps> = (props) => {
  let { children } = props;

  return (
    <Container
      fill="horizontal"
      columns={["small", "flex"]}
      rows={["flex"]}
      areas={[
        {
          name: "sidebar",
          start: [0, 0],
          end: [0, 0],
        },
        {
          name: "main",
          start: [1, 0],
          end: [1, 0],
        },
      ]}
    >
      <Box gridArea="sidebar" fill>
          <SideBar/>
      </Box>
      <Box gridArea="main" fill>
          {children}
      </Box>
    </Container>
  );
};


export default Layout;
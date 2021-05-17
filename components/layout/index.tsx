import { Box, Grid } from "grommet";
import React, { useEffect } from "react";
import SideBar from "./sidebar";
import { LayoutProps } from "./types";
import styled, { createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { userState } from "../../context";
import { useRouter } from "next/router";
import MainLoader from "./loaders/main-loader";

const Container = styled(Grid)`
  min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
  }
`;

const LoaderWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout: React.FC<LayoutProps> = (props) => {
  let { children } = props;
  let userInfo = useRecoilValue(userState);
  let { push } = useRouter();

  useEffect(() => {
    if (!userInfo?.token) {
      push("/login");
    }
  }, []);

  return (
    <div>
      <GlobalStyle />
      {!userInfo?.token && (
        <LoaderWrap>
          <MainLoader />
        </LoaderWrap>
      )}
      <Box>
        {userInfo?.token && (
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
              <SideBar />
            </Box>
            <Box gridArea="main" fill pad="medium">
              <div>{children}</div>
            </Box>
          </Container>
        )}
      </Box>
    </div>
  );
};

export default Layout;

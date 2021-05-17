import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  Spinner,
  Text,
  TextInput,
} from "grommet";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Login as LoginIcon, UserManager, User, Keyboard } from "grommet-icons";
import { useRecoilState } from "recoil";
import { userState } from "../context";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";

const Container = styled(Box)`
  min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
   html,body{
     margin:0;
     padding:0
   }
`;

const Login = () => {
  let [loading, setLoading] = useState(false);
  const [, setUserInfo] = useRecoilState(userState);
  let {push : navigatePage} = useRouter();

  const handleSubmit = async ({ value }) => {
    setLoading(true);
    let response = await fetch("https://reqres.in/api/login", {
      method: "post",
      body: JSON.stringify(value),
      headers: {
        "content-type": "application/json",
      },
    });

    let result = await response.json();

    if (result.token) {
      let userInfo = {
        token: result.token,
        email : value.email
      };
      setUserInfo(userInfo);

      localStorage.setItem("userInfo",JSON.stringify(userInfo));
      navigatePage("/");
    }else{
      alert("Authentication Error!");
    }

    setLoading(false);
  };

  return (
    <Grommet>
      <GlobalStyle />
      <Container
        fill
        background="light-3"
        alignContent="center"
        justify="center"
        align="center"
      >
        <Box
          round="small"
          pad="medium"
          width="20em"
          background="light-2"
          elevation="large"
        >
          <Form onSubmit={handleSubmit}>
            <Box direction="row" justify="center">
              <Box
                direction="row"
                margin={{
                  bottom: "large",
                }}
              >
                <UserManager />
                <Text> Login To App </Text>
              </Box>
            </Box>
            <FormField label="User Name">
              <TextInput
                name="email"
                icon={<User />}
                pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
              />
            </FormField>
            <FormField label="Password">
              <TextInput
                icon={<Keyboard />}
                name="password"
                type="password"
              />
            </FormField>
            <Button
              label="Login"
              type="submit"
              icon={loading ? <Spinner /> : <LoginIcon />}
              primary
              color="brand"
            />
          </Form>
        </Box>
      </Container>
    </Grommet>
  );
};

export default Login;

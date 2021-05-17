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
import { Login as LoginIcon, UserManager } from "grommet-icons";
import { useRecoilState } from "recoil";
import { userState } from "../context";
import { useState } from "react";

const Container = styled(Box)`
  min-height: 100vh;
`;

const Login = () => {
  let [loading, setLoading] = useState(false);
  const [, setUserInfo] = useRecoilState(userState);

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
        setUserInfo({
            token : result.token
        });
    }

    setLoading(false);
    alert(JSON.stringify(result));
  };


  return (
    <Grommet>
      <Container
        fill
        background="light-1"
        alignContent="center"
        justify="center"
        align="center"
      >
        <Box border round="small" pad="small" width="20em">
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
                pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
                value="eve.holt@reqres.in"
              />
            </FormField>
            <FormField label="Password">
              <TextInput name="password" type="password" value="cityslicka" />
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

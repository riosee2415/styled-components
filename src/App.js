import React, { Component, Fragment } from "react";
import styled, {
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider
} from "styled-components";
import theme from "./theme";

const GobalStyle = createGlobalStyle`
  body {
    padding : 0;
    margin :0;
  }
`;

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GobalStyle />
          <Container>
            <Form />
          </Container>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.mainColor};
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

const Card = styled.div`
  background-color: ${props => props.theme.mainColor};
`;

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

export default App;

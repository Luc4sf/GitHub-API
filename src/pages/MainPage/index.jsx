import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

import { Container, Input, Logo, Title, Form, Button } from "./styles";

import githubLogo from "../../assets/images/github-logo.svg";

export default function MainPage() {
  const [login, setLogin] = useState("");

  return (
    <Container>
      <Logo src={githubLogo} alt="GitHub API" />
      <Title>GitHub API</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onKeyDown={(event) =>
            login &&
            event.key === "Enter" &&
            document.getElementById("btnSearch").click()
          }
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button id="btnSearch" to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}

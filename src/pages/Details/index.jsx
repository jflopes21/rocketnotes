import { Container } from "./styles";

import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <span>João Francisco</span>

      <Button title="Login" loading />
      <Button title="Cadastrar" />
      <Button title="Buscar" />
    </Container>
  );
}

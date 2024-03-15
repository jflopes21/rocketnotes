import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Noteitem } from "../../components/Noteitem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações" />

                    <Section title="Link úteis">
                        <Noteitem value="https://rocketseat.com.br" />
                        <Noteitem value="" isNew placeholder="Novo link" />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <Noteitem value="react" />
                            <Noteitem value="" isNew placeholder="Nova tag" />
                        </div>
                    </Section>

                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    );
}

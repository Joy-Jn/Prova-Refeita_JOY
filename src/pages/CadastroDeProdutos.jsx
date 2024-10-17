import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const url = "http://localhost:5000/usuarios";
const Cadastro = () => {
  // variaveis pro usuario
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");

  // variaveis pro alerta
  const [alertaClass, setAlertaClass] = useState("mb-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Cliquei");
    if (!nome == "") {
      if (!categoria == "") {
        if (!preco == "") {
          console.log("entrei");
          const user = { nome, categoria, preco };
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });

          alert("Produto cadastrado com sucesso");
          setNome("");
          setCategoria("");
          setPreco("");
          navigate("/listadeprodutos");
        }
      } else {
        setAlertaClass("mb-3");
        setAlertaMensagem("O campo email não pode ser vazio");
      }
    } else {
      setAlertaClass("mb-3");
      setAlertaMensagem("O campo nome não pode ser vazio");
    }
  };

  return (
    <div style={{backgroundColor:"lightgreen", minHeight:"100vh"}}>
      <Container>
        <span class="" style={{ fontSize: "40px" }}>
          Cadastre o Produto
        </span>
        <form onSubmit={handleSubmit}>
          {/* caixinha do nome */}
          <FloatingLabel
            controlId="floatingInputName"
            label="Nome"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </FloatingLabel>

          {/* caixinha do email */}
          <FloatingLabel
            controlId="floatingInputName"
            label="Categoria"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Categoria"
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value);
              }}
            />
          </FloatingLabel>

          {/* caixinha da senha */}
          <FloatingLabel
            controlId="floatingInputName"
            label="Preço"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Preço"
              value={preco}
              onChange={(e) => {
                setPreco(e.target.value);
              }}
            />
          </FloatingLabel>

          <Alert key="danger" variant="danger" className={alertaClass}>
            {alertaMensagem}
          </Alert>

          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </form>

        <p>
          Já tem cadastro?
          <Nav.Link href="/login">Login</Nav.Link>
        </p>
      </Container>
    </div>
  );
};

export default Cadastro;

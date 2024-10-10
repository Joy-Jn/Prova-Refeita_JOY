import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import Table from "react-bootstrap/Table";

import { useState, useEffect } from "react";

import ModalCadastrar from "../components/ModalCadastrar";

const url = "http://localhost:5000/usuarios";

const Home = () => {
  const [usuarios, setUsuarios] = useState([]);

  const [modalCadastrar, setModalCadastrar] = useState(false);

  //Resgate de dados da API
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const users = await res.json();
        setUsuarios(users);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
    console.log(usuarios);
  }, []);

  return (
    <div>
      <Container>
        <h1>Lista de algo</h1>
        <div className="d-grid col-2 gap-2">
          <Button
            variant="primary"
            size="lg"
            className="mb-3 d-inline-flex justify-content-center"
            onClick={() => {
              setModalCadastrar(true)
            }}
          >
            <span
              className="material-symbols-outlined flex"
              style={{ fontSize: "30px" }}
            >
              add_circle
            </span>
            Cadastrar
          </Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome </th>
              <th>Email</th>
              <th>Tipo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td>{user.tipo}</td>
                <td>
                  <ButtonGroup size="sm">
                    <Button variant="info">Editar</Button>
                    <Button variant="danger">Excluir</Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ModalCadastrar
          show={modalCadastrar}
          onHide={() => {
            setModalCadastrar(false);
          }}
        />
      </Container>
    </div>
  );
};

export default Home;

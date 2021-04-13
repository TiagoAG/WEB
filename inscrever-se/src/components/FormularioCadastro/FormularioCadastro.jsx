import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [apelido, setApelido] = useState("");
  const [cpf, setCpf] = useState("");
  const [data, setData] = useState("");
  

  const [masculino, setMasculino] = useState(true);
  const [feminino, setFeminino] = useState(false);
  const [naobinario, setNaobinario] = useState(false);


  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, email, senha, apelido, cpf, data, masculino, feminino, naobinario});
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="E-mail"
        variant="outlined"
        margin="normal"
        type=""
        fullWidth
      />

      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        id="senha"
        label="Senha"
        variant="outlined"
        margin="normal"
        type="password"
        fullWidth
      />

      <TextField
        value={apelido}
        onChange={(event) => {
          setApelido(event.target.value);
        }}
        id="apelido"
        label="Como devemos chamar você ?"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}

        onBlur={(event)=>{
          const ehValido = validarCPF(cpf);
          setErros({cpf:ehValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
      <TextField
        value={data}
        onChange={(event) => {
          setData(event.target.value);
        }}
        id="data"
        variant="outlined"
        margin="normal"
        type="date"
        fullWidth
      />

      <FormControlLabel
        label="Masculino"
        control={
          <Switch
            checked={masculino}
            onChange={(event) => {
              setMasculino(event.target.checked);
            }}
            name="masculino"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Feminino"
        control={
          <Switch
            checked={feminino}
            onChange={(event) => {
              setFeminino(event.target.checked);
            }}
            name="feminino"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Não Binário"
        control={
          <Switch
            checked={naobinario}
            onChange={(event) => {
              setNaobinario(event.target.checked);
            }}
            name="naobinario"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Inscrever-se
      </Button>
    </form>
  );
}

export default FormularioCadastro;

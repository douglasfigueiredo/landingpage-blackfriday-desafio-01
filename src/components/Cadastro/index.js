import { useState, useEffect } from "react";
import * as S from "./styled";
import Image from "../../assets/banner.png";
import ImageLoader from "../../assets/giphy.gif";

export default function Cadastro() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sendSuccess, setSendSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  let user = {};

  function handleSaveUsers(e) {
    e.preventDefault();

    if (name === "") {
      alert("O campo Nome não pode ser vazio.");
      return;
    }
    if (email === "") {
      alert("O campo E-mail não pode ser vazio.");
      return;
    }
    user = {
      name: name,
      email: email,
    };

    setUsers([...users, user]);

    setName("");
    setEmail("");
  }

  useEffect(() => {
    if (users.length > 0){
      setLoader(true);
      localStorage.setItem("blackfriday_leads", JSON.stringify(users));
      setTimeout(()=>{
        setLoader(false);
        setSendSuccess(true);
      }, 2000);
    }
  }, [users]);

  return (
    <S.ContentCadastro>
      <S.ImageContent>
        <img src={Image} width="100%" alt="Vinhos" />
      </S.ImageContent>
      {
        loader?
          <S.FormCadastroLoader>
            <img src={ImageLoader} width="40px" alt="Loader" />
          </S.FormCadastroLoader>
          :
          sendSuccess ? 
          <S.FormCadastroSuccess>
            <S.Title>CADASTRO REALIZADO COM SUCESSO!</S.Title>
            <S.Button type="button" onClick={()=> setSendSuccess(false)}>
              voltar
            </S.Button>
          </S.FormCadastroSuccess>
        : 
          <S.FormCadastro>
            <S.Title>CADASTRE SEUS DADOS</S.Title>
            <S.SubTitle>E RECEBA PRIMEIRO AS OFERTAS DA BLACK FRIDAY</S.SubTitle>
            <S.Form action="">
              <S.Input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <S.Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <S.Button type="button" onClick={handleSaveUsers}>
                Enviar
              </S.Button>
            </S.Form>
          </S.FormCadastro>
      }
    </S.ContentCadastro>
  );
}

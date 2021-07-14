import styled from "styled-components";

export const ContentCadastro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* width: 100%; */
  padding: 20px;
`;

export const ImageContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 490px;
  margin-bottom: 20px;
`;

export const FormCadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 490px;
  margin: 20px 0 60px;
`;

export const Title = styled.h1`
  font-size: 22px;
  text-align: center;
  color: #fff;
  margin: 5px 0 0;
`;
export const SubTitle = styled.p`
  font-size: 0.85rem;
  text-align: center;
  color: #fff;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 10px;
  background: #000;
  color: #fff;
  border: 1px solid #fff;
  margin-bottom: 30px;

  &::placeholder {
    color: #fff;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background: #5f568e;
  border: none;
  color: #fff;
  text-transform: uppercase;
  padding: 10px 0;
  margin-top: 10px;
`;

export const FormCadastroSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 300px;
  height: 275px;
  margin: 20px 0 60px;
`;

export const FormCadastroLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 300px;
  height: 275px;
  margin: 20px 0 60px;
`;
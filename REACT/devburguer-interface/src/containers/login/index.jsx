import {Container } from './Styles';
import { LeftContainer } from './Styles';
import { RightContainer } from './Styles';
import { Title } from './Styles';
import { InputContainer } from './Styles';
import { Form } from './Styles';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button';
import{api} from '../../services/api.js';
import { toast } from 'react-toastify';
import {Link} from './Styles';
import { useNavigate } from 'react-router-dom';
import { useUser } from "../../hooks/UserContext";




export function Login() {

  const navigate = useNavigate();
  const {putUserData} = useUser();
  const schema = yup
  .object({
    email: yup.string()
    .email('Digite um email válido')
    .required('O campo e-mail é obrigatório'),
    
    password: yup.string()
    .min(6, 'A senha deve ter pelos menos 6 caracteres')
    .required('O campo senha é obrigatório'),
  })
  .required()

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

const onSubmit = async (data) => {
  const { data: userData } = await toast.promise(
    api.post("/session", {
      email: data.email,
      password: data.password,
    }),
    {
      pending: "Verificando seus dados...",
      success: {
        render() {
          setTimeout(() => {
            navigate("/");
          }, 2000);
          return "Seja Bem-vindo(a)!";
        },
      },
      error: "Email ou senha incorretos!",
    }
  );

  // ESTA É A CORREÇÃO NO LOGIN:
  // Forçamos a gravação exata da chave que o sistema espera
  localStorage.setItem('codeburger:userData', JSON.stringify(userData));
  
  putUserData(userData);
};

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-DevBurger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span> 
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>E-mail</label>
            <input type="email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors.password?.message}</p>
          </InputContainer>
          <Button type="submit" >
            Entrar
            </Button>
        </Form >
        
        <p>
      Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
        </p>
        
      </RightContainer>
    </Container>
  );
}

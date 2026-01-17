import {Container } from './Styles.js';
import { LeftContainer } from './Styles.js';
import { RightContainer } from './Styles.js';
import { Title } from './Styles.js';
import { InputContainer } from './Styles.js';
import { Form } from './Styles.js';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button/index.jsx';
import{api} from '../../services/api.js';
import { toast } from 'react-toastify';
import {Link} from './Styles.js';
import { useNavigate } from 'react-router-dom';


export function Register() {
  const navigate = useNavigate();
  const schema = yup
  .object({
    name: yup.string().required('O nome é Obrigatório'),
    email: yup.string()
    .email('Digite um email válido')
    .required('O campo e-mail é obrigatório'),
    
    password: yup.string()
    .min(6, 'A senha deve ter pelos menos 6 caracteres')
    .required('O campo senha é obrigatório'),
    
    confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('Confirmação de senha é obrigatória'),
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
  const toastId = toast.loading("Carregando...");

  try {
    const response = await api.post('/users', {
      name: data.name,
      email: data.email,
      password: data.password,
    }, {
      validateStatus: () => true,
    });

    const { status } = response;

    if (status === 200 || status === 201) {
      toast.update(toastId, {
        render: "Cadastro efetuado com sucesso!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      // redireciona para login após 2s
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } else if (status === 409) {
      toast.update(toastId, {
        render: "Email já cadastrado! Faça o login para continuar",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    } else {
  toast.update(toastId, {
    render: "Falha no cadastro, tente novamente",
    type: "error",
    isLoading: false,
    autoClose: 2000,
  });
}


    

  } catch (error) {
    toast.update(toastId, {
      render: "Falha no sistema, tente novamente",
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
   
  }
};


  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-DevBurger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Crie sua conta
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register("name")} />
            <p>{errors.name?.message}</p>
          </InputContainer>
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
          <InputContainer>
            <label>Confirmar Senha</label>
            <input type="password" {...register("confirmPassword")} />
            <p>{errors.confirmPassword?.message}</p>
          </InputContainer>
          <Button type="submit" >
            Criar Conta
            </Button>
        </Form >
        
        
        <p>
      Já possui conta? <Link to="/login">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}

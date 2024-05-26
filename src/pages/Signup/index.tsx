import { yupResolver } from '@hookform/resolvers/yup';
import { usePopup } from 'context/popup';

import { Button, Typography } from '@material-tailwind/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { signup } from 'services/auth-service';

import { PopupTypesEnum } from 'utils/enums/popup-colors.enum';
import { SignupSchema } from 'utils/form-validators/signup-schema';
import { ISignUp } from 'utils/interfaces/signup.interface';

import { TextInput } from 'components/TextInput';

export const Signup = () => {
  const resolver = yupResolver(SignupSchema);
  const navigate = useNavigate();
  const { triggerPopup } = usePopup();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver });
  const { state } = useLocation();

  const USER_WAS_REDIRECTED_FROM_HOME = state?.fromHome;
  const onSubmit: SubmitHandler<ISignUp> = (data) => {
    signup(data)
      .then(() => {
        navigate('/signin', {
          state: { fromHome: USER_WAS_REDIRECTED_FROM_HOME },
        });
        triggerPopup({
          message: 'Conta criada com sucesso!',
          type: PopupTypesEnum.SUCCESS,
          title: 'Sucesso!!',
        });
      })
      .catch((error) => {
        triggerPopup({
          message: error.response.data.message,
          type: PopupTypesEnum.ERROR,
          title: 'Ops!',
        });
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 mb-2 p-8 max-w-screen-lg"
    >
      <div className="mb-1 flex  items-center flex-col gap-6">
        <TextInput
          label="Primeiro Nome"
          errors={errors.firstname}
          {...register('firstname')}
        />
        <TextInput
          label="Sobrenome"
          errors={errors.lastname}
          {...register('lastname')}
        />
        <TextInput
          label="Usuário"
          errors={errors.username}
          {...register('username')}
        />
        <TextInput
          label="E-mail"
          errors={errors.email}
          {...register('email')}
        />
        <TextInput
          label="Senha"
          type="password"
          errors={errors.password}
          {...register('password')}
        />
        <TextInput
          label="Repita a senha"
          type="password"
          errors={errors.repeatPassword}
          {...register('repeatPassword')}
        />
        <Button type="submit" className="mt-6" fullWidth>
          Cadastrar
        </Button>
      </div>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Já tem uma conta?{' '}
        <Link
          to="/signin"
          state={{ froHome: USER_WAS_REDIRECTED_FROM_HOME }}
          className="font-medium text-gray-900"
        >
          Entrar
        </Link>
      </Typography>
    </form>
  );
};

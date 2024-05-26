import { yupResolver } from '@hookform/resolvers/yup';
import { usePopup } from 'context/popup';
import { useUser } from 'context/user';

import { Button, Typography } from '@material-tailwind/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { signin } from 'services/auth-service';

import { CookiesKeys } from 'utils/constants/cookies-keys';
import { setCookie } from 'utils/cookies';
import { PopupTypesEnum } from 'utils/enums/popup-colors.enum';
import { SigninSchema } from 'utils/form-validators/signin-schema';
import { ISignIn } from 'utils/interfaces/signin.interface';

import { TextInput } from 'components/TextInput';

export const Signin = () => {
  const resolver = yupResolver(SigninSchema);
  const { syncUser } = useUser();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver });
  const { state } = useLocation();
  const navigate = useNavigate();
  const { triggerPopup } = usePopup();

  const USER_WAS_REDIRECTED_FROM_HOME = state?.fromHome;

  const onSubmit: SubmitHandler<ISignIn> = (data) => {
    signin(data)
      .then((response) => {
        setCookie(CookiesKeys.AUTH_TOKEN, (response as any).data.access_token);
        if (USER_WAS_REDIRECTED_FROM_HOME) {
          navigate('/create-page');
        }
        syncUser(USER_WAS_REDIRECTED_FROM_HOME);
        triggerPopup({
          message: response.data.message,
          type: PopupTypesEnum.SUCCESS,
          title: 'Sucesso',
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
      {USER_WAS_REDIRECTED_FROM_HOME && (
        <Typography color="gray" className="text-center mb-8">
          *Antes de criar sua página, precisamos que você faça login.
        </Typography>
      )}
      <div className="mb-1 flex items-center flex-col gap-6">
        <TextInput
          errors={errors.emailOrUsername}
          label="E-mail/Usuário"
          {...register('emailOrUsername')}
        />
        <TextInput
          errors={errors.password}
          type="password"
          label="Senha"
          {...register('password')}
        />
        <Button type="submit" className="mt-6" fullWidth>
          Entrar
        </Button>
      </div>
      <Typography
        color="gray"
        className={`mt-4 text-center font-normal ${
          USER_WAS_REDIRECTED_FROM_HOME && 'text-xl'
        }`}
      >
        Não tem uma conta?{' '}
        <Link
          to="/signup"
          state={{ fromHome: USER_WAS_REDIRECTED_FROM_HOME }}
          className="font-medium text-gray-900"
        >
          Cadastrar
        </Link>
      </Typography>
    </form>
  );
};

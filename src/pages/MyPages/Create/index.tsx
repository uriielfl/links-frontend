import { yupResolver } from '@hookform/resolvers/yup';
import { usePopup } from 'context/popup';

import { Button, Card } from '@material-tailwind/react';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { create } from 'services/pages-service';

import { PopupTypesEnum } from 'utils/enums/popup-colors.enum';
import { createPageSchema } from 'utils/form-validators/create-page-schema';
import { IPage } from 'utils/interfaces/page.interface';

import { TextInput } from 'components/TextInput';

export const Create = () => {
  const { state } = useLocation();
  const PATH = state?.path;
  const resolver = yupResolver(createPageSchema);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver, defaultValues: { path: PATH } });
  const { triggerPopup } = usePopup();
  const onSubmit: SubmitHandler<IPage> = (data) => {
    create(data)
      .then(() => {
        triggerPopup({
          message: 'Página criada com sucesso!',
          type: PopupTypesEnum.SUCCESS,
          title: 'Sucesso!',
        });
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message ?? 'Erro ao criar página!';
        triggerPopup({
          message: errorMessage,
          type: PopupTypesEnum.ERROR,
          title: 'Erro!',
        });
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ path: '', title: '' });
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <Card className="items-center p-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mb-2 md:w-80 sm:w-70 max-w-screen-lg"
      >
        <div className="mb-1 flex flex-col gap-6">
          <TextInput
            label="Título da sua página"
            errors={errors.title}
            {...register('title')}
          />
          <TextInput
            label="Path da sua página"
            errors={errors.path}
            {...register('path')}
          />
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </Card>
  );
};

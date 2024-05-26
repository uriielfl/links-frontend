import { yupResolver } from '@hookform/resolvers/yup';
import { usePopup } from 'context/popup';

import { Button } from '@material-tailwind/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { linkService } from 'services/link.service';

import { PopupTypesEnum } from 'utils/enums/popup-colors.enum';
import { createLinkSchema } from 'utils/form-validators/create-link-schema';
import { ILink } from 'utils/interfaces/link.interface';
import { IPage } from 'utils/interfaces/page.interface';

import { TextInput } from 'components/TextInput';

interface ICreateLinkForm {
  page: IPage;
  onLinkCreated: (link: ILink) => void;
}
export const CreateLinkForm = ({ page, onLinkCreated }: ICreateLinkForm) => {
  const resolver = yupResolver(createLinkSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver });
  const { triggerPopup } = usePopup();
  const onSubmitLinkCreation: SubmitHandler<ILink> = (data) => {
    if (page.id) {
      linkService
        .create({ ...data, page: page.id })
        .then((response) => {
          if (page.links) {
            onLinkCreated(response.data);
            triggerPopup({
              message: 'Link criado com sucesso!',
              type: PopupTypesEnum.SUCCESS,
              title: 'Sucesso!!',
            });
          }
        })
        .catch(() => {
          triggerPopup({
            message: 'Erro ao criar link!',
            type: PopupTypesEnum.ERROR,
            title: 'Erro!',
          });
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitLinkCreation)}
      className="mt-8 mb-2 w-full flex items-center justify-center "
    >
      <div className="mb-1 flex w-60 flex-col gap-6">
        <TextInput
          label="Url do link"
          errors={errors.url}
          {...register('url')}
        ></TextInput>
        <Button type="submit">Adicionar</Button>
      </div>
    </form>
  );
};

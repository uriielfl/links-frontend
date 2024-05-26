import { Input, Typography } from '@material-tailwind/react';
import {
  color as LabelColorEnum,
  variant as LabelVariantEnum,
} from '@material-tailwind/react/types/components/typography';
import { HTMLInputTypeAttribute, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface ITextInput {
  label: string;
  errors?: FieldError;
  labelVariant?: LabelVariantEnum;
  labelColor?: LabelColorEnum;
  labelClassName?: string;
  type?: HTMLInputTypeAttribute;
}

export const TextInput = forwardRef(function TextField(
  {
    label,
    errors,
    labelVariant,
    labelColor,
    labelClassName,
    type,
    ...rest
  }: ITextInput,
  ref,
) {
  return (
    <>
      <Typography
        variant={labelVariant ?? 'h6'}
        color={labelColor ?? 'blue-gray'}
        className={`${labelClassName} -mb-3`}
      >
        {label}
      </Typography>
      <Input
        size="lg"
        crossOrigin=""
        placeholder="Seu nome completo"
        ref={ref as any}
        type={type}
        className={
          errors?.message
            ? '!border-red-800'
            : '!border-t-blue-gray-200 focus:!border-t-gray-900 md:w-full w-46'
        }
        labelProps={{
          className: 'before:content-none after:content-none',
        }}
        {...rest}
      />
      {errors?.message && (
        <Typography color="red" className="text-xs">
          {errors.message}
        </Typography>
      )}
    </>
  );
});

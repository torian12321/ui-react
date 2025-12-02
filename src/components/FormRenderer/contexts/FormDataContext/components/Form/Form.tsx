import type { FormEvent } from 'react';
import { forwardRef, useEffect, useImperativeHandle } from 'react';
import MuiBox from '@mui/material/Box';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import {
  useClearForm,
  useResetForm,
  useSetFieldValue,
  useSubmitForm,
} from '../../reducer/actions';
import { useGetOnChangeFormArgs, useGetValues } from '../../reducer/selectors';
import { fieldsetStyles } from './Form.styles';
import type { ComponentProps, FormProps, FormRef } from './Form.types';

export const Form = forwardRef<FormRef, ComponentProps>(
  (
    {
      children,
      id,
      'data-testid': dataTestid = 'form-renderer',
      sx,
      disabled = false,
      onChange = () => undefined,
      onSubmit = () => undefined,
    }: FormProps,
    ref,
  ) => {
    const [parentRef, enableAnimations] = useAutoAnimate();
    const onChangeForArgs = useGetOnChangeFormArgs();
    const values = useGetValues();

    const submitForm = useSubmitForm(onSubmit);
    const resetForm = useResetForm();
    const clearForm = useClearForm();
    const setFieldValue = useSetFieldValue();

    // Expose the form actions to the parent component
    useImperativeHandle(
      ref,
      (): FormRef => ({
        submitForm,
        resetForm,
        clearForm,
        setFieldValue,
      }),
    );

    useEffect(() => {
      onChange(onChangeForArgs);
      // Trigger ONLY when `values` change
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    useEffect(() => {
      // The first time the form is rendered we want to fields to be directly printed on the screen without a fade-in effect.
      // Immediately after it is loaded, enableAnimations is set to true to allow newly added/removed fields to have animation.
      enableAnimations(false);

      const timer = setTimeout(() => {
        enableAnimations(true);
      }, 0);

      return () => clearTimeout(timer);
    }, [enableAnimations]);

    const handleOnReset = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      resetForm();
    };

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      submitForm();
    };

    return (
      <MuiBox
        component='form'
        autoComplete='off'
        noValidate
        id={id}
        sx={sx}
        onSubmit={handleOnSubmit}
        onReset={handleOnReset}
        data-testid={dataTestid}
      >
        <MuiBox
          component='fieldset'
          sx={fieldsetStyles}
          ref={parentRef}
          disabled={disabled}
        >
          {children}
        </MuiBox>
      </MuiBox>
    );
  },
);

import { TextField } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

const ContactInfo = () => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name='email'
        render={({ field }) => {
          return (
            <TextField
              id='email'
              label='Email'
              variant='outlined'
              placeholder='Email'
              fullWidth
              margin='normal'
              {...field}
            />
          );
        }}
      />

      <Controller
        control={control}
        name='phone'
        render={({ field }) => (
          <TextField
            id='phone'
            label='Phone'
            variant='outlined'
            placeholder='Phone'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
    </>
  );
};

export default ContactInfo;

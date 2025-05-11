import { TextField } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

const AddressInfo = () => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name='address'
        render={({ field }) => (
          <TextField
            id='address'
            label='Address'
            variant='outlined'
            placeholder='Address'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='country'
        render={({ field }) => (
          <TextField
            id='country'
            label='Country'
            variant='outlined'
            placeholder='Country'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
    </>
  );
};

export default AddressInfo;

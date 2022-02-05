import { TextField } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

const PaymentInfo = () => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name='cardNumber'
        render={({ field }) => (
          <TextField
            id='cardNumber'
            label='Card Number'
            variant='outlined'
            placeholder='Card Number'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='expirationDate'
        render={({ field }) => (
          <TextField
            id='expirationDate'
            label='Expiration Date'
            variant='outlined'
            placeholder='Expiration Date'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
    </>
  );
};

export default PaymentInfo;

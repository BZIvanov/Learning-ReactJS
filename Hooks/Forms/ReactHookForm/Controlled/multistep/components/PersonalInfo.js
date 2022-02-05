import { TextField } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

const PersonalInfo = () => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name='firstName'
        render={({ field }) => (
          <TextField
            id='first-name'
            label='First Name'
            variant='outlined'
            placeholder='First Name'
            fullWidth={true}
            margin='normal'
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name='lastName'
        render={({ field }) => (
          <TextField
            id='last-name'
            label='Last Name'
            variant='outlined'
            placeholder='Last Name'
            fullWidth={true}
            margin='normal'
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name='nickName'
        render={({ field }) => (
          <TextField
            id='nick-name'
            label='Nick Name'
            variant='outlined'
            placeholder='Nick Name'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
    </>
  );
};

export default PersonalInfo;

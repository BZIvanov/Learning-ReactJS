import { useForm, Controller } from 'react-hook-form'; // 7.20.2
import { Box, FormControl, Button, TextField } from '@mui/material'; // 5.1.1
import { yupResolver } from '@hookform/resolvers/yup'; // 2.8.3
import * as yup from 'yup'; // 0.32.11

const schema = yup
  .object({
    password: yup.string().required('Password is required'),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password'), null], 'Passwords should match'),
  })
  .required();

const App = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Controller
            name='password'
            control={control}
            render={({ field }) => {
              return (
                <FormControl sx={{ minWidth: '200px' }}>
                  <TextField
                    inputProps={{ ...field }}
                    variant='standard'
                    label='Password'
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                </FormControl>
              );
            }}
          />
        </Box>

        <Box>
          <Controller
            name='confirmPassword'
            control={control}
            render={({ field }) => {
              return (
                <FormControl sx={{ minWidth: '200px' }}>
                  <TextField
                    inputProps={{ ...field }}
                    variant='standard'
                    label='Confirm Password'
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                  />
                </FormControl>
              );
            }}
          />
        </Box>

        <Box>
          <Button type='submit'>Submit</Button>
        </Box>
      </form>
    </div>
  );
};

export default App;

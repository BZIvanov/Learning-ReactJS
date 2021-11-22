import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  FormHelperText,
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const genres = [
  { _id: '1', name: 'Action' },
  { _id: '2', name: 'Comedy' },
  { _id: '3', name: 'SciFi' },
];

const schema = yup
  .object({
    title: yup.string().required(),
    genre: yup.string().required(),
    year: yup.number().positive().integer().required(),
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
      title: '',
      genre: '',
      year: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    console.log(data);
    //e.target.reset();
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Controller
            name='genre'
            control={control}
            render={({ field }) => {
              return (
                <FormControl
                  sx={{ minWidth: '200px' }}
                  variant='standard'
                  error={!!errors.genre}
                >
                  <InputLabel>Genre</InputLabel>
                  <Select {...field}>
                    <MenuItem value=''>None</MenuItem>
                    {genres.map((g) => (
                      <MenuItem key={g._id} value={g._id}>
                        {g.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.genre && (
                    <FormHelperText>{errors.genre.message}</FormHelperText>
                  )}
                </FormControl>
              );
            }}
          />
        </Box>

        <Box>
          <Controller
            name='title'
            control={control}
            render={({ field }) => {
              return (
                <FormControl sx={{ minWidth: '200px' }}>
                  <TextField
                    inputProps={{ ...field }}
                    variant='standard'
                    label='Title'
                    error={!!errors.title}
                    helperText={errors.title?.message}
                  />
                </FormControl>
              );
            }}
          />
        </Box>

        <Box>
          <Controller
            name='year'
            control={control}
            render={({ field }) => {
              return (
                <FormControl sx={{ minWidth: '200px' }}>
                  <TextField
                    inputProps={{ ...field }}
                    variant='standard'
                    label='Year'
                    error={!!errors.title}
                    helperText={errors.title?.message}
                    type='number'
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

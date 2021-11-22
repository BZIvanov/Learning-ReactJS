import { useForm } from 'react-hook-form';
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
    handleSubmit,
    formState: { errors },
    register,
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
          <FormControl
            variant='standard'
            sx={{ minWidth: '200px' }}
            error={!!errors.genre}
          >
            <InputLabel>Genre</InputLabel>
            <Select defaultValue='' inputProps={register('genre')}>
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
        </Box>

        <Box>
          <FormControl sx={{ minWidth: '200px' }}>
            <TextField
              variant='standard'
              label='Title'
              defaultValue=''
              error={!!errors.title}
              helperText={errors.title?.message}
              inputProps={register('title')}
            />
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ minWidth: '200px' }}>
            <TextField
              type='number'
              variant='standard'
              label='Year'
              defaultValue=''
              error={!!errors.year}
              helperText={errors.year?.message}
              inputProps={register('year')}
            />
          </FormControl>
        </Box>

        <Box>
          <Button type='submit'>Submit</Button>
        </Box>
      </form>
    </div>
  );
};

export default App;

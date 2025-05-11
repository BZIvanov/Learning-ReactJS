import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form'; // 7.20.2
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText,
} from '@mui/material'; // 5.1.1
import { yupResolver } from '@hookform/resolvers/yup'; // 2.8.3
import * as yup from 'yup'; // 0.32.11

const schema = yup
  .object({
    user: yup.string().required(),
    post: yup.string().required(),
  })
  .required();

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(data);
      setLoading(false);
    })();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      user: '',
      post: '',
    },
    resolver: yupResolver(schema),
  });

  const userId = watch('user');

  useEffect(() => {
    (async () => {
      setLoading(true);
      setValue('post', '', { shouldValidate: false });
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/?userId=${userId}`
      );
      setPosts(data);
      setLoading(false);
    })();
  }, [userId, setValue]);

  const onSubmit = (data, e) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Controller
            name='user'
            control={control}
            render={({ field }) => {
              return (
                <FormControl
                  sx={{ minWidth: '200px' }}
                  variant='standard'
                  error={!!errors.user}
                  disabled={loading}
                >
                  <InputLabel>Users</InputLabel>
                  <Select {...field}>
                    <MenuItem value=''>None</MenuItem>
                    {users.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.user && (
                    <FormHelperText>{errors.user.message}</FormHelperText>
                  )}
                </FormControl>
              );
            }}
          />
        </Box>

        <Box>
          <Controller
            name='post'
            control={control}
            render={({ field }) => {
              return (
                <FormControl
                  sx={{ minWidth: '200px' }}
                  variant='standard'
                  error={!!errors.post}
                  disabled={loading}
                >
                  <InputLabel>Posts</InputLabel>
                  <Select {...field}>
                    <MenuItem value=''>None</MenuItem>
                    {posts.map((post) => (
                      <MenuItem key={post.id} value={post.id}>
                        {post.title}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.post && (
                    <FormHelperText>{errors.post.message}</FormHelperText>
                  )}
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

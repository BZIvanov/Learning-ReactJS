import Dropzone from 'react-dropzone'; // 11.4.2
import { useForm, Controller } from 'react-hook-form'; // 7.20.2
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
} from '@mui/material'; // 5.1.1
import { CloudUpload, InsertDriveFile } from '@mui/icons-material'; // 5.2.0

const App = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: [],
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        control={control}
        name='files'
        render={({ field: { name, onChange, onBlur, value } }) => {
          return (
            <>
              <Dropzone onDrop={onChange}>
                {({ getRootProps, getInputProps }) => {
                  return (
                    <Paper
                      variant='outlined'
                      sx={{
                        backgroundColor: (theme) => theme.palette.info.light,
                        textAlign: 'center',
                        cursor: 'pointer',
                        padding: '8px',
                      }}
                      {...getRootProps()}
                    >
                      <CloudUpload fontSize='large' />
                      <input
                        {...getInputProps()}
                        name={name}
                        onBlur={onBlur}
                        // accept='image/*' - in case we want to limit files to images only
                      />
                      <Typography>
                        Drag and drop files here, or click to select files
                      </Typography>
                    </Paper>
                  );
                }}
              </Dropzone>
              <List>
                {value.map((file, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <InsertDriveFile />
                    </ListItemIcon>
                    <ListItemText primary={file.name} secondary={file.size} />
                  </ListItem>
                ))}
              </List>
            </>
          );
        }}
      />
      <Button variant='contained' type='submit'>
        Upload files
      </Button>
    </form>
  );
};

export default App;

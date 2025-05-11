import { useEffect } from 'react';
import Dropzone from 'react-dropzone'; // 14.2.2
import { useForm, Controller, useFieldArray } from 'react-hook-form'; // 7.36.0
import {
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  FormControl,
  Button,
  TextField,
} from '@mui/material'; // 5.10.6
import { CloudUpload, InsertDriveFile } from '@mui/icons-material'; // 5.10.6

const App = () => {
  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues: {
      flags: [],
      flagsInfo: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'flagsInfo',
    shouldUnregister: true,
  });

  const uploadedFiles = watch('flags');
  useEffect(() => {
    // remove all the previous flags info
    remove();

    for (let i = 0; i < uploadedFiles.length; i++) {
      append({ filePath: uploadedFiles[i].path, country: '', population: '' });
    }
  }, [uploadedFiles, append, remove]);

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values, null, 4));

    const formData = new FormData();
    values.flags.forEach((file, idx) => {
      const { country, population } = values.flagsInfo.find(
        ({ filePath }) => filePath === file.path
      );
      formData.append(`file${idx}`, file);
      formData.append(
        `file${idx}metadata`,
        JSON.stringify({ country, population })
      );
    });

    const res = await fetch('http://localhost:4000/upload', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());

    console.log(JSON.stringify(res, null, 4));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
      <Controller
        control={control}
        name='flags'
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
                        accept='image/*'
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
                    <ListItemText
                      primary={`File name: ${file.name}`}
                      secondary={`File size: ${file.size}`}
                    />
                  </ListItem>
                ))}
              </List>
            </>
          );
        }}
      />

      {fields.map(({ filePath }, idx) => {
        return (
          // filePath is important here so when we upload new file this component will be unmounted and new one will be mounted, otherwise the previously provided value will stay
          <Box key={filePath}>
            <Controller
              name={`flagsInfo.${idx}.country`}
              control={control}
              render={({ field }) => {
                return (
                  <FormControl sx={{ minWidth: '200px', margin: 1 }}>
                    <TextField
                      inputProps={{ ...field }}
                      variant='standard'
                      label={`Country name for file ${idx}`}
                    />
                  </FormControl>
                );
              }}
            />

            <Controller
              name={`flagsInfo.${idx}.population`}
              control={control}
              render={({ field }) => {
                return (
                  <FormControl sx={{ minWidth: '200px', margin: 1 }}>
                    <TextField
                      inputProps={{ ...field }}
                      variant='standard'
                      label={`Population for file ${idx}`}
                    />
                  </FormControl>
                );
              }}
            />
          </Box>
        );
      })}

      <Box sx={{ marginBlock: 1 }}>
        <Button variant='contained' type='button' onClick={() => reset()}>
          Reset
        </Button>
        <Button variant='contained' type='submit'>
          Upload country flags
        </Button>
      </Box>
    </form>
  );
};

export default App;

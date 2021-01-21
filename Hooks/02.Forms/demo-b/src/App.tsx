import { Formik, Form, Field, useField, FieldAttributes } from 'formik';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import * as yup from 'yup';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// ----- Checkbox with its props
type MyRadioProps = { label: string } & FieldAttributes<{}>;

const MyCheckbox: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props);
  return (
    <FormControlLabel
      label={label}
      {...field}
      control={
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      }
    />
  );
};

// -----

// ----- TextField with its props
const MyTextField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

// -----

const validationSchema = yup.object({
  text: yup.string().required().max(10),
});

const App: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          isTall: false,
          cookies: [],
          heart: false,
          text: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          await sleep(1000);
          console.log(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            {/* With using Field from formik no need to explicitly pass onChange, onBlur, value etc. we will automatically get them */}
            <div style={{ margin: '10px' }}>
              <Field
                name='firstName'
                type='input'
                as={TextField}
                label='First name'
              />
            </div>
            <div style={{ margin: '10px' }}>
              <Field
                name='lastName'
                type='input'
                as={TextField}
                label='Last name'
              />
            </div>
            <div style={{ margin: '10px' }}>
              <Field name='isTall' type='checkbox' as={Checkbox} />
            </div>
            <div style={{ margin: '10px' }}>
              <Field
                name='cookies'
                type='checkbox'
                value='chocolate'
                as={Checkbox}
              />
              <Field
                name='cookies'
                type='checkbox'
                value='snickers'
                as={Checkbox}
              />
            </div>
            <div style={{ margin: '10px' }}>
              <MyCheckbox name='heart' type='checkbox' label='Custom icon' />
            </div>

            <div style={{ margin: '10px' }}>
              <MyTextField placeholder='Some text' name='text' />
            </div>

            <Button disabled={isSubmitting} type='submit' color='secondary'>
              Submit
            </Button>

            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;

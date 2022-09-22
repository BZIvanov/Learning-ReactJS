import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form'; // 7.36.0
import * as yup from 'yup'; // 0.32.11
import { yupResolver } from '@hookform/resolvers/yup'; // 2.9.8

const schema = yup.object().shape({
  teamsCount: yup.string().required('Team count is required'),
  teams: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Team name is required'),
    })
  ),
});

const DynamicForm = () => {
  const {
    control,
    formState: { errors },
    register,
    watch,
    reset,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({ name: 'teams', control });

  const teamsCount = watch('teamsCount');
  useEffect(() => {
    const currentCount = parseInt(teamsCount || 0);
    const previousCount = fields.length;
    if (currentCount > previousCount) {
      for (let i = previousCount; i < currentCount; i++) {
        append({ name: '' });
      }
    } else {
      for (let i = previousCount; i > currentCount; i--) {
        remove(i - 1);
      }
    }
  }, [teamsCount, fields.length, append, remove]);

  const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 4));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Select number of teams</label>
        <select name='teamsCount' {...register('teamsCount')}>
          {['Select option', 1, 2, 3, 4, 5, 6].map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div>{errors.teamsCount?.message}</div>
      </div>

      {fields.map((_, i) => (
        <div key={i}>
          <strong>Team {i + 1}</strong>
          <div>
            <input
              name={`teams.${i}.name`}
              {...register(`teams.${i}.name`)}
              type='text'
            />
            <div>{errors.teams?.[i]?.name?.message}</div>
          </div>
        </div>
      ))}

      <button onClick={() => reset()} type='button'>
        Reset
      </button>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default DynamicForm;

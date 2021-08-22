import tv4 from 'tv4';
import todosStateSchema from '../schema/todos-state-schema';

const validateState = (store) => (next) => (action) => {
  // first run the actions
  next(action);

  const isValid = tv4.validate(store.getState().todos, todosStateSchema);
  if (!isValid) {
    console.warn('Invalid state schema.');
  }
};

export default validateState;

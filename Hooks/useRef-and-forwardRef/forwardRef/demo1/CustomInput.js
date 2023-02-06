import { forwardRef } from 'react';

const CustomInput = (props, ref) => {
  return <input ref={ref} {...props} />;
};

// without forwardRef we will get console error here, because function components cannot be given refs as props
// to get the ref prop we need to forward it and we will receive it as a second argument
export default forwardRef(CustomInput);

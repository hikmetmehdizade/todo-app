import { forwardRef, InputHTMLAttributes, Ref } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(
  ({ ...props }: InputProps, ref: Ref<HTMLInputElement>) => (
    <input
      ref={ref}
      {...props}
    />
  )
);

export default Input;

import { forwardRef, InputHTMLAttributes, Ref } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(
  ({ ...props }: InputProps, ref: Ref<HTMLInputElement>) => (
    <input
      ref={ref}
      className="rounded-lg border-2  border-gray-500 p-2 text-cyan-700 focus:border-amber-600 focus:outline-amber-600"
      {...props}
    />
  )
);

export default Input;

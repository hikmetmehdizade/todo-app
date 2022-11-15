import { ButtonHTMLAttributes, forwardRef, ReactNode, Ref } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = forwardRef(
  ({ children, ...props }: ButtonProps, ref: Ref<HTMLButtonElement>) => (
    <button
      ref={ref}
      {...props}
      className="rounded-xl bg-sky-400 px-10 py-2 text-lg text-slate-50"
    >
      {children}
    </button>
  )
);

export default Button;

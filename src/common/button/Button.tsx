import { ButtonHTMLAttributes, forwardRef, ReactNode, Ref } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = forwardRef(({ children, ...props }: ButtonProps, ref: Ref<HTMLButtonElement>) => (
  <button ref={ref} {...props}>{children}</button>
));


export default Button;

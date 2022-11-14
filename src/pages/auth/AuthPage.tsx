import { Button, Input } from "../../common";
import { SubmitHandler, useForm } from "react-hook-form";

interface LogInValues {
  email: string;
  password: string;
}

const LogInPage = () => {
  const { register, handleSubmit } = useForm<LogInValues>();
  const onSubmit: SubmitHandler<LogInValues> = () => {};

  return (
    <div>
      <h5>Вход в аккаунт</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("email", { required: true })} />
        <Input {...register("password", { required: true })} />
        <Button type="submit">Войти</Button>
      </form>
      <p>
        Еще нет аккаунта? Регистрация
      </p>
    </div>
  );
};

export default LogInPage;

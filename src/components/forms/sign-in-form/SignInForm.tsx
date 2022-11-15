import { Button, Input } from '../../../common';
import { SubmitHandler, useForm } from 'react-hook-form';
import authUser from '../../../store/user';
import { observer } from 'mobx-react-lite';

interface LogInValues {
  email: string;
  password: string;
}

const SignInForm = observer(() => {
  const { register, handleSubmit } = useForm<LogInValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<LogInValues> = (data) => {
    console.log('data', data);
    authUser.logIn(data.email, data.password);
  };
  return (
    <div className="min-w-fit rounded-xl p-8 shadow-2xl">
      <h5 className="text-2xl text-green-600">Вход в аккаунт</h5>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-4 flex flex-col items-center gap-3"
      >
        <Input {...register('email', { required: true })} />
        <Input
          type="password"
          {...register('password', { required: true, minLength: 4 })}
        />
        <Button type="submit">Send</Button>
      </form>
      <p>Еще нет аккаунта? Регистрация</p>
    </div>
  );
});

export default SignInForm;

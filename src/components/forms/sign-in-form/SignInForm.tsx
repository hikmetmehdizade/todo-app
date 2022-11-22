import { SubmitHandler, useForm } from 'react-hook-form';
import authUser from '../../../store/user';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';
import { Form, Input, Button } from 'antd';

interface LogInValues {
  email: string;
  password: string;
}

const SignInForm = () => {
  const navigator = useNavigate();

  const { register, handleSubmit } = useForm<LogInValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: LogInValues) => {
    console.log(data);
    
    authUser.logIn(data.email, data.password).then(() => {
      navigator('/workspaces');
    });
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onSubmit}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <p>Еще нет аккаунта? Регистрация</p>
    </div>
  );
};

export default observer(SignInForm);

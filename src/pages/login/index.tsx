import { Button, Card, Form, Input } from '@arco-design/web-react';
import styles from './index.less';
import { useModel } from 'umi';

export default function Login() {
  document.body.setAttribute('arco-theme', 'dark');
  const [form] = Form.useForm();
  const FormItem = Form.Item;

  const { userInfo, runLogin, loadingLogin } = useModel('userModel');

  return (
    <Card className={styles['card']}>
      <h3>Login In</h3>
      <Form
        form={form}
        layout="vertical"
        onSubmit={(v) => {
          runLogin(v.account, v.password);
        }}
      >
        <FormItem
          label="用户名"
          field="account"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="密码" field="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password placeholder="请输入密码" type="" />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            style={{ width: '100%', marginTop: 10 }}
            htmlType="submit"
            loading={loadingLogin}
          >
            登录
          </Button>
        </FormItem>
      </Form>
    </Card>
  );
}

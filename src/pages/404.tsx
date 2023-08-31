import { Result, Button } from '@arco-design/web-react';

const NotFound = () => {
  return (
    <div style={{ marginTop: 300 }}>
      <Result status="404" subTitle="没有找到页面"></Result>
    </div>
  );
};

export default NotFound;

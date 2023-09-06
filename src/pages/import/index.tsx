import styles from './index.less';
import img1 from '@/assets/1.svg';
import img2 from '@/assets/2.svg';
import img3 from '@/assets/3.svg';
import img4 from '@/assets/4.svg';
import { Button, Card, Steps } from '@arco-design/web-react';

const Step = Steps.Step;

export default function Import() {
  return (
    <Card className={`container ${styles['wrap']}`}>
      <div className={styles['header']}>
        <div className={styles['step']}>
          <h3>请上传数据文件</h3>
          <Steps current={1} style={{ maxWidth: 450, margin: '0 auto' }} labelPlacement="vertical">
            <Step description="导入数值表" />
            <Step description="AI识别 + 人工校验" />
            <Step description="智能策略优化" />
          </Steps>
        </div>
        <img src={img1} />
      </div>

      <div className={styles['content']}>
        <div className={styles['items']}>
          <div className={styles['item']}>
            <img src={img2} />
            <h4>多样化数据采集</h4>
            <span>支持文件 / 文件夹 / 压缩包</span>
          </div>
          <div className={styles['item']}>
            <img src={img3} />
            <h4>科学化数据分析</h4>
            <span>科学分析数据表中完整字段和参数</span>
          </div>
          <div className={styles['item']}>
            <img src={img4} />
            <h4>智能化数据运营</h4>
            <span>通过已有数值表，结合AI策略，智能输出游戏运营方案</span>
          </div>
        </div>

        <Button type="primary" className={styles['btn']}>
          立即上传
        </Button>
      </div>
    </Card>
  );
}

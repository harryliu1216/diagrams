import { ReactNode, useEffect, useRef, useState } from 'react';
import { AutoComplete, Input } from '@arco-design/web-react';
import { IconSearch, IconClose } from '@arco-design/web-react/icon';
import styles from './index.less';
import { OptionInfo } from '@arco-design/web-react/es/Select/interface';

const { Option } = AutoComplete;

function Search() {
  const [visible, updateVisible] = useState<Boolean>(false);
  const [options, setOptions] = useState<String[] | any[]>([]);

  const autoCompleteRef = useRef<any>(null);

  useEffect(() => {
    if (visible && autoCompleteRef.current) {
      autoCompleteRef.current.dom.focus();
    }
  }, [visible]);

  const handleVisible = () => {
    updateVisible(!visible);
  };

  const handleSearch = (inputValue: string) => {
    setOptions(
      inputValue ? new Array(5).fill(null).map((_, index) => `${inputValue}_${index}`) : []
    );
  };

  const handleSelect = (value: string, option: OptionInfo) => {
    console.log(value, option);
  };

  return (
    <>
      <Input
        prefix={<IconSearch />}
        style={{ width: 550, marginTop: 3 }}
        allowClear
        placeholder="Search"
        size="large"
        onFocus={handleVisible}
      />
      {visible && (
        <div className={styles.mask}>
          <div className={styles.input}>
            <AutoComplete
              onSearch={handleSearch}
              onSelect={handleSelect}
              triggerProps={{ unmountOnExit: true }}
              ref={autoCompleteRef}
              inputProps={{
                style: { width: 500 },
                placeholder: 'Search prompts',
                prefix: <IconSearch style={{ fontSize: 18 }} />,
                height: 50,
                allowClear: true
              }}
            >
              {options.map((option) => (
                <Option key={option} value={option} style={{ height: 50 }}>
                  <div className={styles['option']}>
                    <div className={styles['option-title']}>{option}</div>
                    <div
                      className={styles['option-desc']}
                    >{`this is desc for option: ${option}`}</div>
                  </div>
                </Option>
              ))}
            </AutoComplete>
          </div>
          <IconClose className={styles['close']} style={{}} onClick={handleVisible} />
        </div>
      )}
    </>
  );
}

export default Search;

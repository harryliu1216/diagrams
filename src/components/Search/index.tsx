import { useEffect, useRef, useState } from 'react';
import { AutoComplete, Input } from '@arco-design/web-react';
import { IconSearch, IconClose } from '@arco-design/web-react/icon';
import styles from './index.less';
import { OptionInfo } from '@arco-design/web-react/es/Select/interface';

function Search() {
  const [visible, updateVisible] = useState(false);
  const [data, setData] = useState<any>([]);
  const autoCompleteRef = useRef<any>(null);

  useEffect(() => {
    if (visible && autoCompleteRef.current) {
      autoCompleteRef.current.dom.focus();
    }
  }, [visible]);

  const handleVisible = () => {
    updateVisible(!visible);
  };

  const handleSearch = (inputValue: any) => {
    setData(
      inputValue
        ? new Array(5).fill(null).map((_, index) => {
            let value = `${inputValue}_${index}`;
            return { value, name: value };
          })
        : []
    );
  };

  const handleSelect = (value: string, option: OptionInfo) => {
    console.log(value, option);
  };

  return (
    <>
      <Input
        prefix={<IconSearch />}
        style={{ width: 550, marginTop: 5 }}
        allowClear
        placeholder="Search"
        size="large"
        onFocus={handleVisible}
      />
      {visible && (
        <div className={styles.mask}>
          <div className={styles.input}>
            <AutoComplete
              data={data}
              onSearch={handleSearch}
              onSelect={handleSelect}
              ref={autoCompleteRef}
              inputProps={{
                style: { width: 500 },
                placeholder: 'Search prompts',
                prefix: <IconSearch style={{ fontSize: 18 }} />,
                height: 50,
                allowClear: true
              }}
            />
          </div>
          <IconClose className={styles['close']} style={{}} onClick={handleVisible} />
        </div>
      )}
    </>
  );
}

export default Search;

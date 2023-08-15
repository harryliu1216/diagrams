import { useState } from "react"
import { AutoComplete } from "@arco-design/web-react"
import { IconSearch, IconClose } from '@arco-design/web-react/icon';
import styles from './index.less'

function Search() {
  const [visible, updateVisible] = useState(true)
  const [data, setData] = useState([]);
  const handleVisible = () => {
    updateVisible(!visible)
  }

  const handleSearch = (inputValue) => {
    setData(inputValue ? new Array(5).fill(null).map((_, index) => `${inputValue}_${index}`) : []);
  };


  return <>
    {visible && <div className={styles.mask}>
      <div className={styles.input}>
        <AutoComplete data={data} onSearch={handleSearch}
          inputProps={
            {
              style: { width: 500 },
              placeholder: 'Search prompts',
              prefix: <IconSearch style={{ fontSize: 18 }} />,
              height: 50,
              allowClear: true
            }}
        />
      </div>
      <IconClose className={styles['close']} style={{ fontSize: 32, color: 'rgb(161, 161, 170)', cursor: 'pointer' }} onClick={handleVisible} />

    </div>}
  </>

}

export default Search
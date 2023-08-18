import { memo, useEffect, useRef, useState } from 'react';
import Spreadsheet, { Options } from 'x-data-spreadsheet';
import zhCN from 'x-data-spreadsheet/dist/locale/zh-cn';

Spreadsheet.locale('zh-cn', zhCN);

export type XSpreadsheetOptions = {
  options?: Options;
  data: {
    name?: string;
    freeze: string;
    rows?: {
      len: number;
      cells: Cells;
    };
  }[];
  onChange?: (data: any) => void;
};

export type Cells = {
  [key: number]: { text: string; editable?: boolean; style?: number };
};

function XSpreadsheet({ options, data, onChange }: XSpreadsheetOptions) {
  const ref = useRef(null);
  const [instance, setInstance] = useState<Spreadsheet>();

  useEffect(() => {
    //@ts-ignore
    let instance = new Spreadsheet(ref.current, options);
    console.log(instance);
    instance.change((data) => {});
    setInstance(instance);
  }, []);

  useEffect(() => {
    console.log(data, instance);
    if (data) {
      instance?.loadData(data);
    }
  }, [data]);

  return <div ref={ref}></div>;
}

XSpreadsheet.dispalyName = 'XSpreadsheet';

export default memo(XSpreadsheet);

import { Ref, memo, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Spreadsheet, { Options, Element } from 'x-data-spreadsheet';

export type XSpreadsheetOptions = {
  options?: Options;
  data?: {
    name?: string;
    freeze: string;
    rows?: {
      len: number;
      cells: Cells;
    };
  }[];
  onChange?: (data: any) => void;
  spreadsheetInstance?: Ref<{}>;
};

export type Cells = {
  [key: number]: { text: string; editable?: boolean; style?: number };
};

function XSpreadsheet({
  options,
  data = [],
  onChange = () => {},
  spreadsheetInstance
}: XSpreadsheetOptions) {
  const ref = useRef(null);
  const [instance, setInstance] = useState<
    Spreadsheet & {
      datas: [];
      addSheet: (name: string, active: boolean) => void;
      sheet: {
        resetData: (data: any) => void;
      };
      bottombar: {
        items: [];
        clickSwap2: (data: Element) => void;
      };
    }
  >();

  useImperativeHandle(spreadsheetInstance, () => ({ toggleSheet, addSheet }));

  const addSheet = (name: string, active: boolean) => {
    instance?.addSheet(name, active);
  };

  const toggleSheet = (index: number) => {
    if (instance?.datas && index > -1 && index <= instance?.datas.length) {
      const item = instance?.bottombar.items[index];
      instance?.bottombar.clickSwap2(item);
    }
  };

  useEffect(() => {
    //@ts-ignore
    let instance = new Spreadsheet(ref.current, options);
    console.log(instance);
    instance.change(onChange);
    //@ts-ignore Spreadsheet type 不完善
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

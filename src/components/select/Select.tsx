import { Select } from "antd";
import { SelectComponentProps } from "../types";
import { useState } from "react";

const SelectComponent: React.FC<SelectComponentProps> = ({
  options,
  placeholder,
  value,
}) => {
  const [val, setVal] = useState(value);
  return (
    <Select
      options={options}
      placeholder={placeholder}
      style={{ width: 200 }}
      value={val}
      onChange={(newVal) => setVal(newVal)}
    />
  );
};

export default SelectComponent;

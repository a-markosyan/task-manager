interface PriorityOptionType {
  label: string;
  value: number;
}

interface StatusOptionType {
  label: string;
  value: boolean;
}

export interface SelectComponentProps {
  options: (PriorityOptionType | StatusOptionType)[];
  placeholder: string;
  value: number | boolean;
}

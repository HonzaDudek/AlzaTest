interface FormType {
  value: {
    name: string;
    label?: string;
    value?: number | string | string[];
    itemType: string;
    isHidden?: true;
  }[];
  rel: string[];
  href: string;
}

export default FormType;

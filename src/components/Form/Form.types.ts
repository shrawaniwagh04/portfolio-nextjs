export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
}

export interface FormProps {
  data: FormField[];
  onSubmit: (formData: Record<string, string>) => void;
  isError?: boolean;
}

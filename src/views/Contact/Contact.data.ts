import { FormField } from "@/components/Form/Form.types";

export const contactFields: FormField[] = [
    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
    { name: 'email', label: 'Your Email', type: 'email', placeholder: 'Enter your email' },
    { name: 'message', label: 'Your Message', type: 'textarea', placeholder: 'Type your message' }
  ];
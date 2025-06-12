"use client";
import styles from "./Form.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import type { FormProps } from "./Form.types";

const Form = ({ data, onSubmit, isError }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Record<string, string>>();

  const handleFormSubmit: SubmitHandler<Record<string, string>> = (
    formData
  ) => {
    onSubmit(formData);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={styles.FormContainer}
    >
      {data.map((field) => (
        <div className={styles.InputContainer} key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              placeholder={field.placeholder}
              {...register(field.name, {
                required: `${field.label} is required`,
              })}
              className={styles.FormInput}
            ></textarea>
          ) : (
            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name, {
                required: `* ${field.label} is required`,
              })}
              className={styles.FormInput}
            />
          )}
          {errors[field.name] && (
            <span className={styles.error}>{errors[field.name]?.message}</span>
          )}
        </div>
      ))}

      {isError && <span className={styles.error}>* Invalid Credentials</span>}

      <button className={styles.FormSubmitBtn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

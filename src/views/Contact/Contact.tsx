"use client";

import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";
import { contactFields } from "./Contact.data";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

const Form = dynamic(() => import("@/components/Form/Form"));

export default function Contact() {
  const handleFormSubmit = (formData: Record<string, string>) => {
    const templateParams = {
      name: formData.name,
      to_name: "Shrawani Wagh",
      message: formData.message,
      email: formData.email,
    };

    emailjs
      .send(
        "service_okwxx5a",
        "template_foivzxo",
        templateParams,
        "MOnURdGimrQSPUJfQ"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className={styles.ContactContainer}>
      <div className={styles.ContactContent}>
        <h2>Contact Me</h2>
        <Form data={contactFields} onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

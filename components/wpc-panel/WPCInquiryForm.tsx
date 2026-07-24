"use client";

import { useMemo, useState } from "react";
import { WPC_PANEL_CONTACT } from "@/lib/wpc-panel-data";
import styles from "./wpc-product-detail.module.css";

interface InquiryState {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  quantity: string;
  message: string;
}

const initialState: InquiryState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  quantity: "",
  message: "",
};

interface WPCInquiryFormProps {
  productCode: string;
  productName: string;
  sourceUrl: string;
  moq: number;
  unit: string;
}

export default function WPCInquiryForm({ productCode, productName, sourceUrl, moq, unit }: WPCInquiryFormProps) {
  const [form, setForm] = useState(initialState);
  const [notice, setNotice] = useState("");

  const message = useMemo(
    () =>
      [
        `Product: ${productCode} - ${productName}`,
        `Source: ${sourceUrl}`,
        `Name: ${form.name}`,
        `Company: ${form.company || "Not provided"}`,
        `Email: ${form.email}`,
        `Phone / WhatsApp: ${form.phone || "Not provided"}`,
        `Destination: ${form.country}`,
        `Required quantity: ${form.quantity || "Please advise"}`,
        `Requirements: ${form.message || "Please send current specifications, colors, price and lead time."}`,
      ].join("\n"),
    [form, productCode, productName, sourceUrl],
  );

  const whatsappHref = `https://wa.me/${WPC_PANEL_CONTACT.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  function update(field: keyof InquiryState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setNotice("");
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Inquiry for ${productCode} - Indoor WPC Wall Panel`;
    setNotice("Opening your email application with the inquiry details. Please review and send the message there.");
    window.location.href = `mailto:${WPC_PANEL_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  }

  return (
    <form className={styles.inquiryForm} onSubmit={submit}>
      <div className={styles.formGrid}>
        <label>
          Full name
          <input value={form.name} onChange={(event) => update("name", event.target.value)} required autoComplete="name" />
        </label>
        <label>
          Company
          <input value={form.company} onChange={(event) => update("company", event.target.value)} autoComplete="organization" />
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={(event) => update("email", event.target.value)} required autoComplete="email" />
        </label>
        <label>
          Phone / WhatsApp
          <input value={form.phone} onChange={(event) => update("phone", event.target.value)} autoComplete="tel" />
        </label>
        <label>
          Destination country
          <input value={form.country} onChange={(event) => update("country", event.target.value)} required autoComplete="country-name" />
        </label>
        <label>
          Required quantity
          <input value={form.quantity} onChange={(event) => update("quantity", event.target.value)} placeholder={`e.g. ${moq} ${unit}`} />
        </label>
        <label className={styles.formFull}>
          Project requirements
          <textarea value={form.message} onChange={(event) => update("message", event.target.value)} rows={5} placeholder="Application, profile, color, delivery date and any documents required" />
        </label>
      </div>
      <div className={styles.formActions}>
        <button type="submit" className="btn btn-primary">Prepare email inquiry</button>
        <a className="btn btn-outline" href={whatsappHref} target="_blank" rel="noreferrer">Continue on WhatsApp</a>
      </div>
      <p className={styles.formNote}>This form opens your email application; it does not claim submission until you send the message.</p>
      {notice ? <p className={styles.formNotice} role="status">{notice}</p> : null}
    </form>
  );
}

import type { Metadata } from "next";
import CRMApp from "@/components/crm/CRMApp";
import styles from "./admin.module.css";

export const metadata: Metadata = {
  title: "CRM Admin — Board Material Site",
  description: "Customer relationship management system for board material inquiries.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div className={styles.adminRoot}>
      <CRMApp />
    </div>
  );
}

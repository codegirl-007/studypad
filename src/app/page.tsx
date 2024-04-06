import Image from "next/image";
import styles from "./page.module.css";
import { Georama, Albert_Sans } from "next/font/google";
import PrimaryLinkButton from "@/components/PrimaryLinkButton";

export const georama = Georama({
  subsets: ['latin'],
  display: 'swap',
})

export const albert_sans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default async function Home() {
  return (
    <main className={styles.mainContent}>
      <h1 className={`${styles.tagline} ${georama.className}`}>Organize your learning all in one place.</h1>

      <p className={`${styles.caption} ${albert_sans.className}`}>Be focused, organized, and less distracted with Study Pad.</p>

      <div className={styles.callToAction}>
        <PrimaryLinkButton url="#" text="Start for free" className={styles.hero} />
      </div>
    </main>
  );
}

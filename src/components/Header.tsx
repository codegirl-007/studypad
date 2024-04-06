import styles from '@/components/header.module.css'
import PrimaryLinkButton from './PrimaryLinkButton';
import { Albert_Sans } from 'next/font/google';

export const albert_sans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.navigationList}>
        <li className={`${albert_sans.className} ${styles.siteTitle}`}>Study Pad</li>
        <li><PrimaryLinkButton url="#" text="Start for free" /></li>
      </ul>
    </div>
  )
}
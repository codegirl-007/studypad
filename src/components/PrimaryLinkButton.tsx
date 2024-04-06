import Link from "next/link";
import styles from "@/components/primarylinkbutton.module.css"
import {Albert_Sans} from 'next/font/google';

export const albert_sans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function PrimaryLinkButton(props: any) {
  return (
    <Link href={props.url} className={`${styles.primaryButton} ${albert_sans.className} ${props.className}`}>{props.text}</Link>
  )
}
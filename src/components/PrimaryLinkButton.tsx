import Link from "next/link";
import styles from "@/components/primarylinkbutton.module.css"
import { albert_sans } from "@/fonts";

export default function PrimaryLinkButton(props: any) {
  return (
    <Link href={props.url} className={`${styles.primaryButton} ${albert_sans.className} ${props.className}`}>{props.text}</Link>
  )
}
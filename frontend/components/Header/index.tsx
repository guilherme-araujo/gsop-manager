import Link from 'next/link'
import styles from './styles.module.css'

interface props {
    title: string,
    href: string,
    link: string,
}

export default function Header(props: props){
    return (
        <>
          <Link href={props.href}>
            <a className={styles.link}>{props.link}</a>
          </Link>
          <h1 className={styles.title}>{props.title}</h1>
        </>
    )
}
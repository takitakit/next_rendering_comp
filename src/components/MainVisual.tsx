import styles from '../styles/MainVisual.module.scss'
import Image from 'next/image'

export default function MainVisual () {
    return (
        <div className={styles.default}>
            <Image src="/images/mv.jpg" layout="fill" objectFit="cover" alt="Main Visual" />
        </div>
    )
}
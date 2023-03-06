import styles from '@/styles/Nav.module.css'
import Link from 'next/link'

export default function Nav(){
    return(
        <>
            <div className={styles.nav_cont}>
                <div>
                    <ul>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/'>Projects</Link>
                        </li>
                        <li>
                            <Link href='/'>About</Link>
                        </li>
                        <li>
                            <Link href='/'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
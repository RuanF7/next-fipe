import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Form from '@/components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Hello world!</h1>
    </main>
  )
}

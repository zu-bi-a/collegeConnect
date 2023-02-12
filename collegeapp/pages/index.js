import Head from 'next/head'
import { Montserrat } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Banner'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Banner />
      <Section1 />
      <Section2 />
    </>
  )
}

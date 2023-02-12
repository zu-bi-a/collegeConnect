import Nav from '@/components/Nav'
import Header from '@/components/Header.js'
import Footer from './Footer'
import styles from '@/styles/Home.module.css'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <Nav/>
        <main className={styles.main}>
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout
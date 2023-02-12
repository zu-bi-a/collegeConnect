import headerStyles from '@/styles/Header.module.css'
import Image from 'next/image'
import logo from '@/public/logo.png'
import searchicon from '@/public/search.png'
import Link from 'next/link'

const Header = () => {
  return (
    <>
        <div className={headerStyles.headerdiv}>
            <Link href='/'>
                <div className={headerStyles.logo}>
                    <Image 
                        src={logo}
                        alt="Logo"
                        width="80"
                        height="60"
                    />
                </div>
            </Link>
            

            <div className={headerStyles.apptitle}>
                <h1>COLLEGE CONNECT</h1>
            </div> 

            <div className={headerStyles.loginops}>
            <Image 
                    src={searchicon}
                    alt="Logo"
                    width="40"
                    height="40"
                />
            </div>

        </div>

    </>
    
  )
}

export default Header
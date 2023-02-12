import Link from 'next/link'
import navStyles from '@/styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <div className={navStyles.navliDiv}>
                  <Link href='/dashboard'>Dashboard</Link>
                </div>
            </li>
            <li>
            <div className={navStyles.navliDiv}>
                  <Link href='/#jumpsearch'>College Search</Link>
                </div>
            </li>
            <li>
            <div className={navStyles.navliDiv}>
                  <a href='/pathtocollege'>Path To College</a>
                </div>
            </li>
            <li>
            <div className={navStyles.navliDiv}>
                  <Link href='/applytocollege'>Apply To College</Link>
                </div>
            </li>            
        </ul>
    </nav>
  )
}

export default Nav
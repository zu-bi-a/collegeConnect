import footerStyles from '@/styles/Footer.module.css'

const Footer = () => {
  return (
    <>
      <footer className={footerStyles.footer}>
    <div className={footerStyles.waves}>
      <div className={footerStyles.wave1}></div>
      <div className={footerStyles.wave2}></div>
      <div className={footerStyles.wave3}></div>
      <div className={footerStyles.wave4}></div>
    </div>
    <ul className={footerStyles.menu}>
      <li className={footerStyles.menu__item}><a className={footerStyles.menu__link} href="#">Home</a></li>
      <li className={footerStyles.menu__item}><a className={footerStyles.menu__link} href="#">About</a></li>
      <li className={footerStyles.menu__item}><a className={footerStyles.menu__link} href="#">Team</a></li>
      <li className={footerStyles.menu__item}><a className={footerStyles.menu__link} href="#">Contact</a></li>

    </ul>
    <p>Binary Beasts | HackJMI</p>
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  )
}

export default Footer

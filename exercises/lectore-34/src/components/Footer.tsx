import styles from './footer.module.css'


function Footer() {
    const contacts = (
       <div className={styles.contacts}>
            <a className={styles.link} href="mailto:Juliesunrise80@gmail.com">Juliesunrise80@gmail.com</a>
           <a className={styles.link} href="phone:+380680090875">My number</a>
           <a className={styles.link} href="https://www.linkedin.com/in/%D1%8E%D0%BB%D1%96%D1%8F-%D0%BC%D0%B0%D0%BA%D0%B0%D1%80%D0%BE%D0%B2%D0%B0-10550124b/">My LinkedIn</a>
       </div>
    )
    return <>
        {contacts}
    </>
}

export default Footer
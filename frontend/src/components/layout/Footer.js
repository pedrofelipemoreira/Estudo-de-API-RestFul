import React from 'react';

import styles from  './footer.module.css'

function Footer(){

    return(
        <footer className = {styles.footer}>
            <p> <span className="bold">Q-Lab</span> &copy; 2023 </p>
        </footer>
    )

}

export default Footer;